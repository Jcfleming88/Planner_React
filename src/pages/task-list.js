import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { PageLayout } from "../components/page-layout";
import { ProjectList } from "../components/cards/project-list/project-list";
import { TaskList } from "../components/cards/task-list/task-list";
import { PageLoader } from "../components/page-loader.js";

import "../styles/theme.css";

import { projects, tasks } from "../dev/example-data.js";
import { Project } from "../modules/project.js";
import { Task } from "../modules/task.js";
import { IconButton } from "../components/buttons/icon-button.js";
import { EditProject } from "../components/cards/edit-project.js";
import { EditTask } from "../components/cards/edit-task.js";

import { getAllProjects } from "../services/projects.service.js";
import { getAllTasks } from "../services/tasks.service.js";

import plus from "../images/icons/plus.png";

export const TaskListPage = () => {
  //#region Variables
  const { user, getAccessTokenSilently } = useAuth0();

  const [allProjects, setAllProjects] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const [projectId, setProjectId] = useState(0);
  const [currentTask, setCurrentTask] = useState(null);

  const [projectOpen, setProjectOpen] = useState(false);
  //#endregion

  //#region Effects
  // Fetch the projects and tasks when the page loads
  useEffect(() => {
    if (getAccessTokenSilently && user) {
      const fetchData = async () => {
        const accessToken = await getAccessTokenSilently();

        // 1. Start both requests simultaneously (no await yet)
        const projectsPromise = getAllProjects(accessToken, user);
        const tasksPromise = getAllTasks(accessToken, user);

        // 2. Wait for both to resolve at the same time
        const [projectsResult, tasksResult] = await Promise.all([
            projectsPromise, 
            tasksPromise
        ]);

        // 3. Destructure the results as you did before
        const { data: projectsData, error: projectsError } = projectsResult;
        const { data: tasksData, error: tasksError } = tasksResult;

        if (projectsError) {
          console.error("Error fetching projects:", projectsError);
        } else {
          setAllProjects(projectsData);
          console.log("Projects fetched successfully");
        }

        if (tasksError) {
          console.error("Error fetching tasks:", tasksError);
        } else {
          setAllTasks(tasksData);
          console.log("Tasks fetched successfully");
        }
      };

      fetchData();
    }
  }, [getAccessTokenSilently, user]);

  // Update the filter list when the selected project is changed
  useEffect(() => {
    if (allTasks != null) {
      if (projectId !== 0) {
        const filteredList = [
          ...allTasks.filter((task) => {
            return task.ProjectId === projectId;
          }),
        ];
        setFilteredTasks(filteredList);
      } else {
        setFilteredTasks([...allTasks]);
      }
    }
  }, [allProjects, allTasks, projectId]);
  //#endregion

  //#region Handlers
  // Change the selected project on the page
  const handleSelectProject = (projectId) => {
    setProjectId(projectId);
  };

  const handleNewProject = () => {
    setProjectOpen(true);
  };

  const handleCloseProject = () => {
    setProjectOpen(false);
  };

  const handleNewTask = () => {
    setCurrentTask(new Task());
  };

  const handleTaskClick = (task) => {
    setCurrentTask(task);
  };
  //#endregion

  //#region Example
  // Example of fetching protected resource
  // useEffect(() => {
  //   let isMounted = true;

  //   const getMessage = async () => {
  //     const accessToken = await getAccessTokenSilently();
  //     const { data, error } = await getProtectedResource(accessToken);

  //     if (!isMounted) {
  //       return;
  //     }

  //     if (data) {
  //       setMessage(JSON.stringify(data, null, 2));
  //     }

  //     if (error) {
  //       setMessage(JSON.stringify(error, null, 2));
  //     }
  //   };

  //   getMessage();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [getAccessTokenSilently]);
  //#endregion

  //#region Loading Page
  if (allProjects === undefined || allTasks === undefined) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  //#endregion

  //#region Page Layout
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Task List
        </h1>
        <div className="content__task-list">
          <ProjectList
            title="Projects"
            buttons={[
              <IconButton
                imageUrl={plus}
                alt="Add project"
                bgColour={"var(--primary-light-20)"}
                onClick={handleNewProject}
              />,
            ]}
            colour1="var(--primary-dark-50)"
            colour2="var(--primary)"
            projects={allProjects}
            selectedProject={projectId}
            onSelectProject={handleSelectProject}
          />
          <TaskList
            title="Tasks"
            buttons={[
              <IconButton
                imageUrl={plus}
                alt="Add task"
                bgColour={"var(--secondary-light-20)"}
                onClick={handleNewTask}
              />,
            ]}
            colour1="var(--secondary-dark-50)"
            colour2="var(--secondary)"
            tasks={filteredTasks}
            onTaskClick={handleTaskClick}
          />
        </div>
        <EditProject
          isOpen={projectOpen}
          onClose={() => handleCloseProject()}
        />
        <EditTask task={currentTask} />
      </div>
    </PageLayout>
  );
  //#endregion
};
