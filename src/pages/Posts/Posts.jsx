import React,{useEffect} from 'react'
import './Posts.scss';
import Card from '../../components/UI/BlogSlider-card/Card'
import {connect} from 'react-redux'
import * as action from '../../redux/actions/index'
import {withRouter} from 'react-router-dom'
import queryString  from 'query-string'
import Loader from '../../components/UI/loader/loader'


function Posts(props) {

    const parsed = queryString.parse(props.location.search);

    useEffect(() => {
        props.onInitPost()
    }, []);

    function handleId(id){
            props.history.push({
              pathname:`/post`,
              search:`?id=${id}`
            })
    }


    let posts = props.posts && props.posts.map(item =>{
            switch (parsed.category) {
                case 'brain':
                    return item.category === 'brain' && <Card key={item.id}  onClick={()=>{handleId(item.id)}} label={item.name} content={item.content}/>
                case 'code':
                    return item.category === 'code' && <Card key={item.id}  onClick={()=>{handleId(item.id)}} label={item.name} content={item.content}/>
                default:
                    return <Card key={item.id}  onClick={()=>{handleId(item.id)}} label={item.name} content={item.content}/>
            }
        })

    if(props.loading) posts = <Loader/>

    return (
        <div className='posts'>
           {posts}
        </div>
    )
}


const mapStateToProps = state => {
    return{
        posts:state.fetchPost.posts,
        loading:state.fetchPost.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onInitPost:()=>{dispatch(action.fetchPost())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Posts))
