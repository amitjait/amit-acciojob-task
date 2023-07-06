import React from "react";

const Task = () =>{

    return(
        <div class="card text-bg-light mb-3" style={{minWidth: "18rem", maxWidth:"25rem"}}>
            <div class="card-header fs-4 fw-bold d-flex justify-content-between border-bottom-0">Title <span className="d-flex align-items-center gap-3"><i class="fa-sharp fa-solid fa-trash"></i> <i class="fa-solid fa-pen"></i></span></div>
            <div class="card-body">
                <div className="due-date d-flex justify-content-between align-items-center mt-2">
                    <h5 class="">Due Date</h5>
                    <h6>07/07/2023</h6>
                </div>
                <div className="due-date d-flex justify-content-between align-items-center mt-2">
                    <h5 class="">Status</h5>
                    <h6>Incomplete</h6>
                </div>
                <div className="desc mt-2">
                    <h5>Description</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Task;