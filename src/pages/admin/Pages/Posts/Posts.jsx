import React,{useEffect,useState} from 'react'
import Card from '../../components/Admin-card/Card'
import './Posts.scss'
import Button from '../../../../components/UI/Button/Button'
import axios from '../../../../axios'
import { connect } from "react-redux";
import * as action from '../../../../redux/actions/index'
import Loader from '../../../../components/UI/loader/loader'

function Posts(props) {

    const [state, setstate] = useState(false)
    
    useEffect( ()=>{
           props.onInitPosts()
    },[state])

    function write() {
        props.history.push('/admin/new')
    }
    
    function deletethat(id){
        axios.delete(`/posts/${id}.json`)
        props.onInitPosts() 
        setstate(true)
    }

    function edit(id) {
        props.history.push({
            pathname: '/admin/update',
            search: `?id=${id}`
           })
    }
    
    let posts = <> 
            <div className="create-new">
                <Button onClick={write} label="Write new"/>
            </div>
            <div className="admin-cards">
                {props.posts !== null && props.posts.map(post=>{
                    return <Card onEdit={()=>{edit(post.id)}} onClick={()=>{deletethat(post.id)}} key={post.id} label={post.name}  content={post.content} />
                })}
            </div>
    </>

if(props.loading){
    posts= <Loader/>
}

    return (
        <div className='admin-posts'>
            {posts}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        posts:state.fetchPost.posts,
        loading:state.fetchPost.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitPosts: () => {dispatch(action.fetchPost())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
