import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../Logo/Logo'
import './Navbar.scss'


function Navbar() {

    function openDropdown() {
        const dropdown = document.querySelector('.dropdown_menu');
        dropdown.classList.toggle('active')
    }

    return (
        <nav className="navbar">
            <div className="container">
            <div className="logo">
                <Logo/>
            </div>  
            <div className="navigation">
                <div className="hamburger">
                    <img onClick={openDropdown} className="hamburger-icon" src={require("../../../assets/images/hamburger.svg")} alt="Hamburger menu"/>
                </div>
                <ul className="dropdown_menu">
                    <li className="dropdown_menu_item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="dropdown_menu_item">
                        <NavLink to="/posts">Blogs</NavLink>
                    </li>
                    {/* <li className="dropdown_menu_item">
                        <NavLink to="/videos">Videos</NavLink>
                    </li>
                    <li className="dropdown_menu_item">
                        <NavLink to="/about">About us</NavLink>
                    </li> */}
                    <hr/>
                    <li className="dropdown_menu_item">
                        <NavLink to="/posts?category=code"><span className='red'></span> Code</NavLink>
                    </li>
                    <li className="dropdown_menu_item">
                        <NavLink to="/posts?category=brain"><span className='blue'></span> From my brain</NavLink>
                    </li>
                    <span className='dropdown_color'></span>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
