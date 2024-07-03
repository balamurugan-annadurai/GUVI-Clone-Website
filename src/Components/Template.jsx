import React, { useEffect, useState } from 'react'
import guviLogo from "../assets/guvi-logo.svg"
import { NavLink, Outlet } from 'react-router-dom';


//Template component serves as the main layout for the application
const Template = () => {

    const [navStatus, setNavStatus] = useState(false);
    const [menuIconstatus, setMenuIconStatus] = useState(true);

    const handleMenuClick = () => {
        setMenuIconStatus(!menuIconstatus);
        setNavStatus(!navStatus);
    }
    useEffect(() => {
        const menu = document.getElementById('menu-icon');
        const navMenu = document.querySelector('.navbar-container');
        const links = document.querySelectorAll('ul li');
        menu.addEventListener('click', () => {
            navMenu.classList.add('display');
        })
        
        links.forEach(link => link.addEventListener('click', () => {
            navMenu.classList.remove('display');
        }) )

    },[])
    return (
        <>
            <header>
                <div className="header">
                    <div className="px-2 px-sm-0 top container m-0">
                        <div className="left-side">
                            <img src={guviLogo} alt="" className="logo" />
                            <div className="logo-divider"></div>
                            <h1 className='m-0 fs-4'>Blog</h1>
                            <div className="search-bar d-none d-md-block">
                                <input type="text" className='input'
                                    placeholder='What do you want to read?' />
                                <span><i className='bx bx-search icon'></i></span>
                            </div>
                        </div>
                        <div className="signIn d-flex justify-content-center flex-column">
                            <h5 className='m-0 d-flex justify-content-center flex-column'>Sign In</h5>
                        </div>
                    </div>
                    <div className="bottom">

                        <div id='menu-icon' className="menu-icon">
                            <i className='bx bx-menu'></i>
                        </div>

                        <div className="search-bar d-block d-md-none">
                            <input type="text" className='input'
                                placeholder='What do you want to read?' />
                            <span><i className='bx bx-search icon'></i></span>
                        </div>
                    </div>
                </div>
            </header>

            <main className='d-flex flex-column align-items-center'>

                <nav className='navbar-container'>
                    <ul className='container'>
                        <li><NavLink to='/'>All</NavLink></li>
                        <li><NavLink to='/FullStackDevelopment'>Full Stack Development</NavLink></li>
                        <li><NavLink to='/DataScience'>Data Science</NavLink></li>
                        <li><NavLink to='/CyberSecurity'>Cyber Security</NavLink></li>
                        <li><NavLink to='/Career'>Career</NavLink></li>
                    </ul>
                </nav>
                <Outlet />
            </main>
        </>
    )
}

export default Template