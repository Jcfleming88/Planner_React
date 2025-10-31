import { Task } from "../modules/task";
import { Project } from "../modules/project";

export const projects = [
    new Project({
        Id: 1,
        Name: "Project Alpha",
    }),
    new Project({
        Id: 2,
        Name: "Project Beta",
    }),
];

export const tasks = [
    new Task({
        Id: 1,
        ProjectId: 1,
        Name: "Design Homepage",
        Urgency: 0
    }),
    new Task({
        Id: 2,
        ProjectId: 1,
        Name: "Develop Backend",
        Urgency: 2,
        Status: 1
    }),
    new Task({
        Id: 3,
        ProjectId: 2,
        Name: "Market Research",
        Urgency: 1
    })
];

export const statuses = {
    0: "New",
    1: "In Progress",
    2: "On Hold",
    3: "Review",
    4: "Completed",
    5: "Bin"
};