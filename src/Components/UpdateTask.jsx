import React, { useState, useEffect } from "react";

const UpdateTask = ({updateTask, setUpdateTask}) => {
  const [taskId, setTaskId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");

  const handleClose = () => {
    document.getElementById("update-task").style.display = "none";
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Update the task in localStorage
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.email) {
      return;
    }

    const currentUserData = usersData.find((userData) => userData.email === currentUser.email);

    if (currentUserData && currentUserData.tasks) {
      const updatedTasks = currentUserData.tasks.map((task) => {
        if (task.taskId === taskId) {
          return {
            taskId: taskId,
            title: (title.length > 0) ? title:task.title,
            date: (date.length > 0) ? date:task.date,
            status: (status.length > 0) ? status:task.status,
            desc: (desc.length > 0) ? desc:task.desc,
          };
        } else {
          return task;
        }
      });

      currentUserData.tasks = updatedTasks;
      localStorage.setItem("usersData", JSON.stringify(usersData));
      setUpdateTask(!updateTask);
    }

    // Reset the form fields
    setTitle("");
    setDate("");
    setStatus("");
    setDesc("");

    // Close the update form
    handleClose();
  };

  useEffect(() => {
    // Fetch the task ID from localStorage
    const taskId = localStorage.getItem("taskId");

    // Fetch the task data from localStorage
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.email) {
      return;
    }

    const currentUserData = usersData.find((userData) => userData.email === currentUser.email);

    if (currentUserData && currentUserData.tasks) {
      const task = currentUserData.tasks.find((task) => task.taskId === taskId);

      if (task) {
        setTaskId(taskId);
        setTitle(task.title);
        setDate(task.date);
        setStatus(task.status);
        setDesc(task.desc);
      }
    }
  }, []);

  return (
    <div className="container-fluid update-task align-items-center" id="update-task" style={{ height: "100vh" }}>
      <div className="container border p-3 fw-bold rounded-4 opacity-100 inner-task" style={{ height: "50vh" }}>
        <div className="container d-flex">
          <h4 className="w-100 text-center text-light mb-3">Update task</h4>
          <i className="fa-solid fa-xmark fs-3" onClick={handleClose}></i>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="task-title" className="form-label" style={{ width: "120px" }}>
                Task Title
              </label>
              <input
                type="text"
                className="form-control"
                id="task-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="date" className="form-label" style={{ width: "120px" }}>
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="due-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="input-group mb-3 align-items-center">
              <label className="input-group-text fw-bold" htmlFor="status" style={{ width: "110px" }}>
                Status
              </label>
              <select
                className="form-select"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Choose...</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Progress">Progress</option>
                <option value="Complete">Completed</option>
              </select>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="desc" className="form-label" style={{ width: "120px" }}>
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="due-date"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
