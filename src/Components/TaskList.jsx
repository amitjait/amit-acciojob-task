import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useNavigate } from "react-router-dom";

const TaskList = ({addTask, updateTask}) => {
  const [tasks, setTasks] = useState([]);
  const [deleteTask, setDeleteTask] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (!currentUser || !currentUser.email) {
        navigate("/login");
        return;
      }

      const currentUserData = usersData.find((userData) => userData.email === currentUser.email);
      if (currentUserData && currentUserData.tasks) {
        setTasks(currentUserData.tasks);
      }
    };

    fetchUserData();
  }, [addTask, deleteTask, updateTask]);

  const addTaskHandle = () => {
    document.getElementById("addtask").style.display = "block";
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.email) {
      navigate("/login");
      return;
    }

    const currentUserData = usersData.find((userData) => userData.email === currentUser.email);

    if (currentUserData && currentUserData.tasks) {
      let filteredTasks = currentUserData.tasks;

      if (filterValue === "Incomplete") {
        filteredTasks = filteredTasks.filter((task) => task.status === "Incomplete");
      } else if (filterValue === "Progress") {
        filteredTasks = filteredTasks.filter((task) => task.status === "Progress");
      } else if (filterValue === "Complete") {
        filteredTasks = filteredTasks.filter((task) => task.status === "Complete");
      }

      setTasks(filteredTasks);
    }
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    const sortedTasks = [...tasks];

    if (sortValue === "Asc") {
      sortedTasks.sort((a, b) => a.date.localeCompare(b.date));
    } else if (sortValue === "Dsc") {
      sortedTasks.sort((a, b) => b.date.localeCompare(a.date));
    }

    setTasks(sortedTasks);
  };

  if (localStorage.getItem("login") === "false") {
    navigate("/login");
    return null;
  }

  return (
    <div className="container-fluid taskList" style={{ height: "fit-content" }}>
      <div className="container border mt-3 d-flex align-items-center justify-content-between p-2 ps-4 pe-4 rounded-3">
        <h3>Tasks</h3>
        <i className="fa-solid fa-plus fs-3" id="add-task-icon" onClick={addTaskHandle}></i>
      </div>
      <div className="container-fluid d-flex flex-wrap">
        <div className="container mt-2 d-flex align-items-center justify-content-center">
          <div className="input-group mb-3 align-items-center">
            <label className="input-group-text fw-bold" htmlFor="status" style={{ width: "150px" }}>
              Filter By Status
            </label>
            <select className="form-select" id="status" onChange={handleFilterChange}>
              <option selected value="">
                Choose...
              </option>
              <option value="Incomplete">Incomplete</option>
              <option value="Progress">Progress</option>
              <option value="Complete">Completed</option>
            </select>
          </div>
          <div className="input-group mb-3 align-items-center">
            <label className="input-group-text fw-bold" htmlFor="sort" style={{ width: "150px" }}>
              Sort By Due Date
            </label>
            <select className="form-select" id="sort" onChange={handleSortChange}>
              <option selected value="Asc">
                Asc
              </option>
              <option value="Dsc">Dsc</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mt-4 d-flex flex-wrap justify-content-between">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={index}
              taskId={task.taskId}
              title={task.title}
              dueDate={task.date}
              status={task.status}
              description={task.desc}
              deleteTask={deleteTask}
              setDeleteTask={setDeleteTask}
            />
          ))
        ) : (
          <div className="container mt-4 d-flex flex-wrap justify-content-between">Empty...</div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
