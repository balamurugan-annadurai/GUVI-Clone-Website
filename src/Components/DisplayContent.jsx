import React, { useContext } from 'react'
import guviLogo from "../assets/guvi-logo.svg"
import { useLocation } from 'react-router-dom'

const DisplayContent = () => {
    const location = useLocation();
    const { blog } = location.state;
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
                        <div className="search-bar d-block d-md-none">
                            <input type="text" className='input'
                                placeholder='What do you want to read?' />
                            <span><i className='bx bx-search icon'></i></span>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="container blog-content mt-3">
                    <h1 className='mb-4'>{blog.title}</h1>
                    <div className="article">
                        <img src={blog.img} alt="" />
                        <div className="inner">
                            <p className='blog-details'>{blog.domain}</p>
                            <p className='blog-details'>Junl 02, 2024</p>
                            <p className='blog-content p'>{blog.content}</p>
                            <button className='btn btn-dark readMoreBtn mb-3'><a href={blog.url}>Read More</a></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DisplayContent