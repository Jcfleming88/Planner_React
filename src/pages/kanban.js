import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { PageLayout } from "../components/page-layout";
import { ProjectList } from "../components/cards/project-list/project-list";
import { TaskList } from "../components/cards/task-list/task-list";
import { PageLoader } from "../components/page-loader.js";
import { getProtectedResource } from "../services/message.service";

import "../styles/theme.css";

import { projects, tasks } from "../dev/example-data.js";
import { Project } from "../modules/project.js";
import { statuses } from "../dev/example-data.js";
import { IconButton } from "../components/buttons/icon-button.js";
import { EditProject } from "../components/cards/edit-project.js";
import { EditTask } from "../components/cards/edit-task.js";

import plus from "../images/icons/plus.png";

export const KanbanPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const statusKeys = Object.keys(statuses).sort((a, b) => a - b);
  const { isAuthenticated } = useAuth0();

  const [allProjects, setAllProjects] = useState([
    new Project({ Id: 0, Name: "All" }),
    ...projects,
  ]);
  const [allTasks, setAllTasks] = useState([...tasks]);
  const [filteredTasks, setFilteredTasksDo] = useState([]);

  const [projectId, setProjectId] = useState(0);
  
  const [projectOpen, setProjectOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  //#endregion

  //#region Effects
  // Update the filter list when the selected project is changed
  useEffect(() => {
    if (allTasks != null) {
      if (projectId !== 0) {
        const filteredList = [
          ...allTasks.filter((task) => {
            return task.ProjectId === projectId;
          }),
        ];
        setFilteredTasksDo(filteredList);
      } else {
        setFilteredTasksDo(allTasks);
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
    setProjectOpen(true)
  }

  const handleCloseProject = () => {
    setProjectOpen(false)
  }

  const handleNewTask = () => {
    setTaskOpen(true)
  }

  const handleCloseTask = () => {
    setTaskOpen(false)
  }
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

  return (
    <PageLayout>
      <div className="content-layout">
        <div className="content__compact-title">
          <h1 id="page-title" className="content__title">
            Kanban Board
          </h1>
          <ProjectList
            title="Projects"
            buttons={[
              <IconButton
                imageUrl={plus}
                alt="Add project"
                bgColour={"var(--secondary-light-20)"}
              />,
            ]}
            colour1="var(--secondary-dark-50)"
            colour2="var(--secondary)"
            projects={allProjects}
            selectedProject={projectId}
            onSelectProject={handleSelectProject}
            type="tabs"
          />
        </div>
        <div className="content__kanban">
          {statusKeys.map((key) => {
            return (
              <TaskList
                key={key}
                title={statuses[key]}
                buttons={null}
                colour1="var(--primary-dark-50)"
                colour2="var(--primary)"
                tasks={filteredTasks.filter((task) => {
                  return task.Status === Number(key);
                })}
              />
            );
          })}
        </div>
        <div className="overpage">
          <IconButton
            imageUrl={plus}
            alt="Add project"
            bgColour={"var(--primary)"}
          />
        </div>
        <EditProject
          isOpen={projectOpen}
          onClose={() => handleCloseProject()}
        />
        <EditTask isOpen={taskOpen} onClose={() => handleCloseTask()} />
      </div>
    </PageLayout>
  );
};
