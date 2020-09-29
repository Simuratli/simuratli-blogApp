import React from 'react'
import './Header.scss'

function Header(props) {
    return (
        <h1 className='header'>
            {props.heading}
        </h1>
    )
}

export default Header
