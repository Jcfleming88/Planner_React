import React from "react";
import { ListBox } from "../../cards/list-box";
import { ProjectItem } from "./project-item";
import { Project } from "../../../modules/project";
import "../../../styles/theme.css"

export const ProjectList = ({
  title,
  buttons,
  colour1,
  colour2,
  projects,
  selectedProject,
  onSelectProject,
  type = "list",
}) => {
  return (
    <ListBox
      title={title}
      buttons={buttons}
      colour1={colour1}
      colour2={colour2}
      type={type}
    >
      {projects.map((project) => {
        const isSelected = project.Id === selectedProject;
        return (
          <ProjectItem
            key={'pr'+project.Id}
            project={project}
            onSelectProject={onSelectProject}
            isSelected={isSelected}
          />
        );
      })}
    </ListBox>
  );
};
