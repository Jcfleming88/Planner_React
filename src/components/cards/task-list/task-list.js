import React from "react";
import { ListBox } from "../../cards/list-box";
import { TaskItem } from "./task-item";

export const TaskList = ({ title, buttons, colour1, colour2, tasks }) => {
    return (
        <ListBox title={title} buttons={buttons} colour1={colour1} colour2={colour2}>
            {tasks.map((task) => {
                return (
                    <TaskItem key={task.Id} task={task} />
                )
            })}
        </ListBox>
    )
}