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

const App = () => {
    // State variables for managing task addition and update
    let [addTask, setAddTask] = useState(false);
    let [updateTask, setUpdateTask] = useState(false);

    return (
        <div className="app position-relative">
            {/* Display toast notifications */}
            <ToastContainer />
            {/* Display the navigation bar */}
            <Navbar />
            <Routes>
                {/* Set up routes for different pages */}
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* Pass task addition and update states and functions to the TaskList component */}
                <Route path="/user" element={<TaskList addTask={addTask} updateTask={updateTask} setUpdateTask={setUpdateTask}/>} />
            </Routes>
            {/* Render the CreateTask component and pass the state and function to it */}
            <CreateTask addTask={addTask} setAddTask={setAddTask}/>
            {/* Render the UpdateTask component and pass the state and function to it */}
            <UpdateTask updateTask={updateTask} setUpdateTask={setUpdateTask}/>
        </div>
    );
}

export default App;
