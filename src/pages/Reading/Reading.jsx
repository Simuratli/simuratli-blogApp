import React,{Suspense,lazy,useEffect,useState} from 'react'
import queryString  from 'query-string'
import {withRouter} from 'react-router-dom'
import axios from '../../axios'
import parse from 'html-react-parser'
import * as action from '../../redux/actions/index'
import { connect } from 'react-redux'
import Loader from '../../components/UI/loader/loader'
 
const PostHeader = lazy(()=>{
    return import('../../components/UI/PostHeader/PostHeader')
})

const TextContent = lazy(()=>{
    return import('../../components/UI/TextContent/TextContent')
})

const Header = lazy(()=>{
    return import('../../components/UI/Header/Header')
})





function Reading(props) {

    const parsed = queryString.parse(props.location.search);
    useEffect(() => {
        props.onFetchPostItself(parsed.id)
    }, [])

    
    let post = <>
            <Suspense fallback={<Loader/>}>
                <PostHeader/>
            </Suspense>
            <Suspense fallback={<Loader/>}>
                <Header heading={props.name}/>
            </Suspense>
            <Suspense fallback={<Loader/>}>
                <TextContent text={parse(String(props.content))} />
            </Suspense>
    </>

    if(props.loading) post = <Loader/>

    return (
        <section>
            {post}
        </section>
    )
}

const MapStateToProps = state => {
    return{
        name:state.fetchItselfPost.name,
        content:state.fetchItselfPost.content,
        loading:state.fetchItselfPost.loading,
    }
}


const MapDispatchToProps = dispatch => {
    return{
        onFetchPostItself: (id)=>{dispatch(action.postFetch(id))}
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(withRouter(Reading))
