import React from 'react'
import {Link } from 'react-router-dom'
import './Logo.scss'

function Logo() {
    return (
        <h1 className='logo-head'><Link to='/'>SIMURATLI</Link></h1>
    )
}

export default Logo
