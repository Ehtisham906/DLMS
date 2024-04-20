import React from 'react'
import logo from '../Assests/Images/logo.svg'
import { Link } from "react-router-dom"
import '../styles/Navbar.css'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  " >
                <div className="container navbar-outer">
                    <div className='logo-div'>
                        <img src={logo} alt="" />
                        <h1 className="navbar-brand">DLMS</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto g-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active  " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link " to="/">Course</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link  " to="/featurecourses">Featuring Courses</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link  " to="/about">About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link  " to="/gallery">Gallery</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/dashboard">

                                <button className='login-btn'>Login</button>
                            </Link>
                            <button className='signup-btn'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container hr">
                <hr />
            </div>
        </>

    )
}

export default Navbar
