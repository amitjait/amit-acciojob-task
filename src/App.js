import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreateTask from "./Components/CreateTask";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TaskList from "./Components/TaskList";
import UpdateTask from "./Components/UpdateTask";

const App = () =>{

    let [addTask, setAddTask] = useState(false);
    let [updateTask, setUpdateTask] = useState(false);
    

    return (
        <div className="app position-relative">
            <ToastContainer />
            <Navbar />
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/user" element={<TaskList addTask={addTask} updateTask={updateTask}/>} />
            </Routes>
            <CreateTask addTask={addTask} setAddTask={setAddTask}/>
            <UpdateTask updateTask={updateTask} setUpdateTask={setUpdateTask}/>
        </div>
    )
}

export default App;