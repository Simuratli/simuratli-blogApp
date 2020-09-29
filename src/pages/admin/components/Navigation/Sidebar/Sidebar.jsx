import React from 'react'
import './Sidebar.scss'
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className='sidebar'>
            <NavLink exact to="/admin">Index</NavLink>
            <NavLink exact to="/admin/posts">Posts</NavLink>
            {/* <NavLink exact to="/admin/videos">Videos</NavLink> */}
            {/* <NavLink exact to="/admin/about">About Us</NavLink> */}
            <NavLink exact to="/logout">Logout</NavLink>
        </aside>
    )
}

export default Sidebar
