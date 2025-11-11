import { useState } from "react";
import { OverCard } from "../navigation/over-card";
import { Project } from "../../modules/project";

export const EditProject = ({ isOpen = false, project = null, onClose = null, onSubmit = null }) => {
  const [currentProject, setCurrentProject] = useState(
    project ? project : new Project()
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedProject = new Project({
      ...currentProject,
      [name]: value,
    });

    setCurrentProject(updatedProject);
  };

  return (
    <OverCard isOpen={isOpen} onClose={onClose}>
      <form className="card-form" onSubmit={onSubmit}>
        <h2 className="form-header">Project</h2>
        <div className="form-main">
          <div className="form-input">
            <h4 className="label" htmlFor="name">Project Name:</h4>
            <input
              type="text"
              name="Name"
              className="input"
              value={currentProject.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="description">Description:</h4>
            <textarea
              name="Description"
              className="input"
              value={currentProject.Description}
              onChange={handleChange}
              rows="4"
            />
          </div>
        </div>
        <div className="form-buttons">
          <button className="button" type="button" onClick={onClose}>Cancel</button>
          <button className="button" type="submit">Save</button>
        </div>
      </form>
    </OverCard>
  );
};
