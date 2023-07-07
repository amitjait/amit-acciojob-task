import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !pass || !cPass) {
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

    if (pass !== cPass) {
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

        return;
    }

    // Store user data in local storage as an array
    const userData = JSON.parse(localStorage.getItem("usersData")) || [];
    const user = {
      email: email,
      password: pass,
    };

    userData.push(user);
    localStorage.setItem("usersData", JSON.stringify(userData));

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
  };

  useEffect(() => {
    if (localStorage.getItem("login") === "true") {
      navigate("user");
    }
  }, [localStorage.getItem("login")]);

  return (
    <div className="outer w-100 justify-content-center d-flex" style={{height:"70vh"}}>
            <div className="container w-75 border align-self-center p-3 rounded-5" style={{height:"65vh"}}>
                <div className="form-top d-flex justify-content-center">
                    <h1>Sign Up</h1>
                </div>
                <div className="container-fluid">
                    <div className="mb-3">
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
                    {/* <div className="mt-2">Already Have Account <Link to="/login" className="text-primary">Click Here</Link></div> */}
                </div>
            </div>
        </div>
  );
};

export default SignUp;
