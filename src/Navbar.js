import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <section className='navbar-bg'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/#">Quick<i>Pay</i> </a>
                    <button className="navbar-toggler" type="button" onClick={() => setShow(!show)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-style mx-4" type="submit">Sign up</button>
                            <button className="btn btn-style btn-style-border" type="submit">Log in</button>
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;