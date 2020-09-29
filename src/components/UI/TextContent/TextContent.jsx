import React from 'react'
import './TextContent.scss'

function TextContent(props) {
    return (
        <div className="article">
            {props.text}
        </div>
    )
}

export default TextContent
