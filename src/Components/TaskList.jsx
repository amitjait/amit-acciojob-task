import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({setAddTask}) =>{

    let [click, setClick] = useState(false);

    const addtaskhandle = ()=>{
        document.getElementById("addtask").style.display = "block";
    }


    return (
        <div className="container-fluid taskList" style={{height:"fit-content"}}>
            <div className="container border mt-3 d-flex align-items-center justify-content-between p-2 ps-4 pe-4 rounded-3">
                <h3>Tasks</h3>
                <i class="fa-solid fa-plus fs-3" id="add-task-icon" onClick={addtaskhandle}></i>
            </div>
            <div className="container mt-4 d-flex flex-wrap justify-content-between">
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    )
}

export default TaskList;