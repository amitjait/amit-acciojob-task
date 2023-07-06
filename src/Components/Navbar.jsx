import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";


const Navbar = () =>{


    let navigate = useNavigate();


    const logOut =() =>{
        auth.signOut();

        localStorage.setItem("login", "false");
        toast.warning('Loged Out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        navigate('/login');
        return;
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-0 ">
            <div className="container">
                <a className="navbar-brand me-5 fw-bold fs-3" href="/">Tasklist</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    {
                        (!localStorage.getItem("login") || localStorage.getItem("login") === "false") ?
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark d-flex w-100 justify-content-end">
                            <li className="nav-item">
                                <Link to="/" className="">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login">Login</Link>
                            </li>
                        </ul> : 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark d-flex w-100 justify-content-end">
                            <li className="nav-item">
                                <i class="fa-solid fa-circle-user fs-3"></i>
                            </li>
                            <li className="nav-item">
                                <i class="fa-solid fa-arrow-right-from-bracket fs-3" onClick={logOut}></i>
                            </li>
                        </ul>
                    }
                </div>
            </div>
            </nav>
    )
}


export default Navbar;