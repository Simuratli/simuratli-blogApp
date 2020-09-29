import React from 'react'
import './Index.scss'
import Navigation from '../../components/Navigation/Navigation'
import { Route , Redirect } from "react-router-dom";
import Hello from '../Hello/Hello'
import AdminPosts from '../Posts/Posts'
import New from '../WriteNew/WriteNew'
import {connect} from 'react-redux'
import Update from '../update/update'


function Index(props) {
    return (
        <div className="Admin">
             <Navigation/>
             <main className="admin-main">
                 <Route exact path="/admin/" component={Hello} />
                 <Route exact path="/admin/posts" component={AdminPosts} />
                 <Route exact path="/admin/new" component={New} />
                 <Route exact path="/admin/update/" component={Update} />
                 {!props.token && <Redirect to='/login' /> }
             </main>       
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token:state.auth.idToken
    }
}


export default connect(mapStateToProps)(Index)
