import React from "react";

const Task = ({ taskId, title, dueDate, status, description }) => {
  const handleOpen = () => {
    document.getElementById("update-task").style.display = "block";
    localStorage.setItem("taskId", taskId); // Store the task ID in localStorage
  };

  const handleDelete = () => {
    // Remove the task from the localStorage
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.email) {
      return;
    }

    const currentUserData = usersData.find((userData) => userData.email === currentUser.email);

    if (currentUserData && currentUserData.tasks) {
      const updatedTasks = currentUserData.tasks.filter((task) => task.taskId !== taskId);
      currentUserData.tasks = updatedTasks;
      localStorage.setItem("usersData", JSON.stringify(usersData));
    }

    // Remove the task from the UI by re-rendering the parent component
    // You need to pass a unique identifier/key for each task component to ensure correct deletion
  };

  return (
    <div className="card text-bg-light mb-3" style={{ minWidth: "18rem", maxWidth: "25rem" }}>
      <div className="card-header fs-4 fw-bold d-flex justify-content-between border-bottom-0">
        {title}
        <span className="d-flex align-items-center gap-3">
          <i className="fa-sharp fa-solid fa-trash" id="delete" onClick={handleDelete}></i>{" "}
          <i className="fa-solid fa-pen" onClick={handleOpen}></i>
        </span>
      </div>
      <div className="card-body">
        <div className="due-date d-flex justify-content-between align-items-center mt-2">
          <h5>Due Date</h5>
          <h6>{dueDate}</h6>
        </div>
        <div className="due-date d-flex justify-content-between align-items-center mt-2">
          <h5>Status</h5>
          <h6>{status}</h6>
        </div>
        <div className="desc mt-2">
          <h5>Description</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
