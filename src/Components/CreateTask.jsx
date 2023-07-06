import React, { useState } from "react";

const CreateTask = ({addTask}) =>{

    let [title, setTitle] = useState("");
    let [date, setDate] = useState("");
    let [status, setStatus] = useState("");
    let [desc, setDesc] = useState("");

    const handleClose = ()=>{
        document.getElementById("addtask").style.display = "none";
    }


    return (

        <div className="container-fluid create-task align-items-center" id="addtask" style={{height:"100vh"}}>
            <div className="container border p-3  fw-bold rounded-4 opacity-100 inner-task" style={{height:"50vh"}}>
                <div className="container d-flex">
                    <h4 className="w-100 text-center text-light mb-3">Add task</h4>
                    <i class="fa-solid fa-xmark fs-3" onClick={() => handleClose()}></i>
                </div>
                <div>
                    <div class="mb-3 d-flex align-items-center">
                        <label for="task-title" class="form-label" style={{width:"120px"}}>Task Title</label>
                        <input type="text" class="form-control" id="task-title" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div class="mb-3 d-flex align-items-center" >
                        <label for="date" class="form-label" style={{width:"120px"}}>Date</label>
                        <input type="date" class="form-control" id="due-date" onChange={(e) => setDate(e.target.value)}/> 
                    </div>
                    <div class="input-group mb-3 align-items-center">
                        <label class="input-group-text  fw-bold" for="status" style={{width:"110px"}}>Status</label>
                        <select class="form-select" id="status" onChange={(e) => setStatus(e.target.value)}>
                            <option selected value="">Choose...</option>
                            <option value="Incomplete">Incomplete</option>
                            <option value="Progress">Progress</option>
                            <option value="Complete">Completed</option>
                        </select>
                    </div>
                    <div class="mb-3 d-flex align-items-center" >
                        <label for="desc" class="form-label" style={{width:"120px"}}>Description</label>
                        <input type="text" class="form-control" id="due-date" onChange={(e)=> setDesc(e.target.value)}/> 
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </div>
            </div>
        </div>
        
    )
}

export default CreateTask;