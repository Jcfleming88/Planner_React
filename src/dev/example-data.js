import { Task } from "../modules/task";
import { Project } from "../modules/project";

export const projects = [
    new Project({ Id: 1, Name: "Project Alpha" }),
    new Project({ Id: 2, Name: "Project Beta" }),
    new Project({ Id: 3, Name: "Project Gamma" }),
    new Project({ Id: 4, Name: "Project Delta" }),
    new Project({ Id: 5, Name: "Project Epsilon" }),
];

export const tasks = [
    new Task({ Id: 1, ProjectId: 1, Name: "Design Homepage", Urgency: 0, Status: 0, Category: "UI" }),
    new Task({ Id: 2, ProjectId: 1, Name: "Develop Backend", Urgency: 2, Status: 1, Category: "Development" }),
    new Task({ Id: 3, ProjectId: 1, Name: "Setup Database", Urgency: 1, Status: 2 }),
    new Task({ Id: 4, ProjectId: 1, Name: "Write Documentation", Urgency: 0, Status: 3, Category: "Documentation" }),
    new Task({ Id: 5, ProjectId: 1, Name: "Deploy to Production", Urgency: 2, Status: 4 }),

    new Task({ Id: 6, ProjectId: 2, Name: "Market Research", Urgency: 1, Status: 0, Category: "Marketing" }),
    new Task({ Id: 7, ProjectId: 2, Name: "Create Ad Campaign", Urgency: 2, Status: 1 }),
    new Task({ Id: 8, ProjectId: 2, Name: "Social Media Strategy", Urgency: 1, Status: 2, Category: "Marketing" }),
    new Task({ Id: 9, ProjectId: 2, Name: "Budget Planning", Urgency: 0, Status: 3 }),
    new Task({ Id: 10, ProjectId: 2, Name: "Launch Campaign", Urgency: 2, Status: 4 }),

    new Task({ Id: 11, ProjectId: 3, Name: "Feature Specification", Urgency: 1, Status: 0 }),
    new Task({ Id: 12, ProjectId: 3, Name: "UI Mockups", Urgency: 0, Status: 1, Category: "UI" }),
    new Task({ Id: 13, ProjectId: 3, Name: "API Integration", Urgency: 2, Status: 2 }),
    new Task({ Id: 14, ProjectId: 3, Name: "Testing", Urgency: 1, Status: 3, Category: "QA" }),
    new Task({ Id: 15, ProjectId: 3, Name: "Release v1.0", Urgency: 2, Status: 4 }),

    new Task({ Id: 16, ProjectId: 4, Name: "Client Meeting", Urgency: 0, Status: 0 }),
    new Task({ Id: 17, ProjectId: 4, Name: "Requirements Gathering", Urgency: 1, Status: 1, Category: "Planning" }),
    new Task({ Id: 18, ProjectId: 4, Name: "Prototype Development", Urgency: 2, Status: 2 }),
    new Task({ Id: 19, ProjectId: 4, Name: "Feedback Review", Urgency: 1, Status: 3 }),
    new Task({ Id: 20, ProjectId: 4, Name: "Final Delivery", Urgency: 2, Status: 4 }),
];

export const statuses = {
    0: "New",
    1: "In Progress",
    2: "On Hold",
    3: "Review",
    4: "Completed",
    5: "Bin"
};