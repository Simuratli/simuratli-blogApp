import React,{useState,useEffect} from 'react'
import {EditorState, convertToRaw, ContentState, convertFromHTML} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html';
import Button  from '../../../../components/UI/Button/Button'
import axios from '../../../../axios'
import queryString  from 'query-string'

function Update(props) {
  const parsed = queryString.parse(props.location.search);

    const [state, setstate] = useState({
      editorState: null,
        data:{
          name:'',
          content:'',
          category:"code"
        },
    })

    function uploadImageCallBack(file) {
      
        return new Promise(
          (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID fae7afa4d29eb20');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
              const response = JSON.parse(xhr.responseText);
              resolve(response);
            });
            xhr.addEventListener('error', () => {
              const error = JSON.parse(xhr.responseText);
              reject(error);
            });
          }
        );
      }
      
      var onEditorStateChange =  (editorState) => {
        setstate({
          ...state,
          editorState,
          data:{
            ...state.data,
            content:draftToHtml(convertToRaw(editorState.getCurrentContent()))
          }
        });
      };


      function send(e) {
        e.preventDefault()
          axios.put( `/posts/${parsed.id}.json`, state.data )
              .then( response => {
                props.history.push('/admin/posts')
              } )
              .catch( error => {
                  console.log( error );
          } );
      }
      useEffect(() => {
        
        async function fetchPost() {
          const response = await axios.get(`/posts/${parsed.id}.json`);
          const data = await response.data;


          setstate(prevState=>({
            ...prevState,
            editorState:EditorState.createWithContent(
              ContentState.createFromBlockArray(
                convertFromHTML(data.content ? data.content : '<p>Please add text</p>')
              )
            ),
            data:{
              name:data.name,
              content:data.content,
              category:data.category
            }
          }))
        }

        fetchPost();
      }, [parsed.id])

      

      
      function handleChange(e){
        const {name,value} = e.target
        setstate({
          ...state,
          data:{
            ...state.data,
            [name]:value
          }
        })
      }


    return (
        <div className="writeNew">
            <div className="new">
                <form>
                  <label>Name of Post</label>
                  <input name="name" value={state.data.name}  onChange={handleChange}/>
                  <label>Category</label>
                  <select  value={state.data.category} onChange={handleChange} name="category" >
                    <option value="code">Code</option>
                    <option value="brain">From my brain</option>
                  </select>
                    <Editor
                        editorState={state.data ? state.editorState : null}
                        onEditorStateChange={onEditorStateChange} 
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"   
                        toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                        }}
                    />
                   
                    <Button onClick={send} label="Save" />
                </form>
            </div>
        </div>
    )
}

export default Update

