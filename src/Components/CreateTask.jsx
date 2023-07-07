import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateTask = ({ addTask, setAddTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (!title || !date || !status || !desc) {
        toast.warning('Invalid Test', {
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

    // Fetch user data from local storage
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) {
      toast.warning("User not found", {
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

    const currentUserData = usersData.find((userData) => userData.email === currentUser.email);

    const tasks = currentUserData.tasks || [];

    const taskId = generateUniqueId();

    const newTask = {
      taskId: taskId,
      title: title,
      date: date,
      status: status,
      desc: desc,
    };

    tasks.push(newTask);
    currentUserData.tasks = tasks;

    // Update the usersData array in local storage
    const updatedUsersData = usersData.map((userData) => (userData.email === currentUser.email ? currentUserData : userData));
    localStorage.setItem("usersData", JSON.stringify(updatedUsersData));

    toast.success('Task Added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    setAddTask(!addTask);
    localStorage.setItem("taskId", taskId);
    handleClose();
  };

  function generateUniqueId() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uniqueId = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uniqueId += characters.charAt(randomIndex);
    }

    return uniqueId;
  }

  const handleClose = () => {
    document.getElementById("addtask").style.display = "none";
    setTitle("");
  };

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
                        <input type="text" class="form-control" id="task-title" value={title} onChange={(e) => setTitle(e.target.value)}/>
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
                    <button type="submit" class="btn btn-primary mt-2" onClick={() => handleSubmit()}>Submit</button>
                </div>
            </div>
        </div>
  );
};

export default CreateTask;
