import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import errorMapping from "../Util/errorMapping";

const Login = () =>{

    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    let navigate = useNavigate();


    const handleSubmit =() =>{
        if(!email || !pass){
            toast.warning('Fill All Details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        auth.signInWithEmailAndPassword(email, pass).then((res)=>{
            toast.success('Loged In', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                localStorage.setItem("user", email);
                localStorage.setItem("login", "true");

                navigate("/user");
        }).catch((e)=>{
            toast.error(errorMapping[e.code] || 'Some Error Occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }


    return (
        <div className="outer w-100 justify-content-center d-flex" style={{height:"70vh"}}>
            <div className="container w-75 border align-self-center p-3 rounded-5" style={{height:"55vh"}}>
                <div className="form-top d-flex justify-content-center">
                    <h1>Login</h1>
                </div>
                <div className="container-fluid">
                    <div class="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>  
                    <div className="mb-3">
                        <label for="pass" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pass" onChange={(e) => setPass(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;