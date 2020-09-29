import React,{useState} from 'react'
import './Writenew.scss'
import "../../components/InputFields/Input.scss";
import {EditorState, convertToRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html';
import Button  from '../../../../components/UI/Button/Button'
import * as action from '../../../../redux/actions/index'
import {connect} from 'react-redux'
import Loader from '../../../../components/UI/loader/loader'

function WriteNew(props) {
    
    const [state, setstate] = useState({
        editorState: EditorState.createEmpty(),
        data:{
          name:null,
          content:null,
          category:'code',
        }
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
        props.onWritePost(state.data.name,state.data.content,state.data.category)
        if(!props.loading){
           setTimeout(() => {
            props.history.push('/admin/posts')
           }, 1000);
        }
      }
      
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

    let form = null 
    if(props.loading){
      form = <Loader/>
    }else {
      form = <form>
      <label>Name of Post</label>
      <input name='name' type="text" onChange={handleChange}/>
      <label>Category</label>
      <select  onChange={handleChange} name="category" >
        <option value="code">Code</option>
        <option value="brain">From my brain</option>
      </select>

        <Editor
            editorState={state.editorState}
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
    }

    return (
        <div className="writeNew">
            <div className="new">
                {form}
            </div>
        </div>
    )
}

const MapStateToProps = state => {
  return {
    loading:state.writeReducer.loading
  }
}

const MapDispatchToProps = dispatch => {
  return{
    onWritePost:(name,content,category)=>{dispatch(action.writepost(name,content,category))}
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(WriteNew)

