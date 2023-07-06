import React from "react";
import { Link } from "react-router-dom";


const Navbar = () =>{

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-0 ">
            <div className="container">
                <a className="navbar-brand me-5 fw-bold fs-3" href="/">Tasklist</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}


export default Navbar;