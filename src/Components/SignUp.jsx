import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Util/errorMapping";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{

    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');
    let [cPass, setCPass] = useState('');

    let navigate = useNavigate();



    console.log(localStorage.getItem("login"));


    const handleSubmit = ()=>{
        if(!email || !pass || !cPass){
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

                console.log("1st");
            return;
        }

        if(pass !== cPass){
            toast.warning('Password Mismatch!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                console.log("2nd");
            return;
        }

        auth.createUserWithEmailAndPassword(email, pass).then((res)=>{
            toast.success('user created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            navigate("/user");
            localStorage.setItem("login", "true");

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



    useEffect(() =>{
        if(localStorage.getItem("login") &&localStorage.getItem("login") === "true"){
            navigate("user");
        }
    }, [localStorage.getItem("login")])

    return (
        <div className="outer w-100 justify-content-center d-flex" style={{height:"70vh"}}>
            <div className="container w-75 border align-self-center p-3 rounded-5" style={{height:"65vh"}}>
                <div className="form-top d-flex justify-content-center">
                    <h1>Sign Up</h1>
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
                    <div className="mb-3">
                        <label for="con-pass" className="form-label">Confirm Password</label>
                        <input type="text" className="form-control" id="cPass" onChange={(e) => setCPass(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;