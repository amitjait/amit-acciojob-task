import React, { createRef, useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreateTask from "./Components/CreateTask";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TaskList from "./Components/TaskList";

const App = () =>{

    let [addTask, setAddTask] = useState(false);
    

    return (
        <div className="app position-relative">
            <ToastContainer />
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<SignUp/>}/> */}
                <Route path="/" element={<TaskList />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/user" element={<TaskList setAddTask={setAddTask}/>} />
            </Routes>
            <CreateTask />
        </div>
    )
}

export default App;