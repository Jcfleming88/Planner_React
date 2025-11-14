import React from "react";
import { urgencyColours } from "../../../modules/urgency";

export const TaskItem = ({ task, onClick }) => {
    const taskItem = task;

    const options = {
        weekday: 'short', // e.g., 'Mon'
        year: 'numeric',  // e.g., '2025'
        month: 'short',    // e.g., 'October'
        day: '2-digit',   // e.g., '29'
        hour: '2-digit',
        minute: '2-digit',
    };

    const handleClick = () => {
        onClick(taskItem);
    }

    return (
        <div className="task-item" onClick={() => {handleClick()}}>
            <div className="task-urgency" style={{backgroundColor: urgencyColours[task.Urgency]}}/>
            <div className="task-description">
                <h4>
                    {task.Name}
                </h4>
                {task.Start ? <h6>{task.Start.toLocaleString('en-UK', options)} : </h6> : null}
                {task.End ? <h6>{task.End.toLocaleString('en-UK', options)}</h6> : (task.Start ? <h6>No End Date</h6> : null)}
            </div>
        </div>
    )
};