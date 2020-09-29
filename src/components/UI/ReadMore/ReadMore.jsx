import React from 'react'
import './ReadMore.scss'
import {withRouter} from 'react-router-dom'
import Button from '../Button/Button'


function ReadMore(props) {
    function gotoMore(e) {
        e.preventDefault()
        props.history.push('/posts')
    }
    return (
        <div className="read-more">
            <Button onClick={gotoMore} label="more" />
        </div>
    )
}

export default withRouter(ReadMore)
