import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useState } from "react";
import { OverCard } from "../navigation/over-card";
import { Project } from "../../modules/project";
import { IconButton } from "../buttons/icon-button";

import { getUsers } from "../../services/users.service";

import plus from "../../images/icons/plus.png";

export const EditProject = ({
  isOpen = false,
  project = null,
  onClose = null,
  onSubmit = null,
}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [currentProject, setCurrentProject] = useState(
    project ? project : new Project(),
  );
  const [users, setUsers] = useState([]);
  const [avaliableUsers, setAvailableUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  //#region Effects
  React.useEffect(() => {
    if(!getAccessTokenSilently) return;

    const fetchUsers = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getUsers(accessToken);

      if (error) {
        console.error("Error fetching users:", error);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, [getAccessTokenSilently]);

  React.useEffect(() => {
    const au = users.filter(
      (u) => !currentProject.Users?.some((pu) => pu.Id === u.Id)
    )

    setAvailableUsers(au);
  }, [users, currentProject.Users]);
  //#endregio

  //#region Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedProject = new Project({
      ...currentProject,
      [name]: value,
    });

    setCurrentProject(updatedProject);
  };

  const handleAddUser = () => {
    // Escape the handle if it's on the default option or if there are no users to add
    if (!newUser || newUser === "NA") return;

    // Find the user object corresponding to the selected user ID
    const userToAdd = users.find((u) => u.id === newUser);

    // If there's no user then escape the handle (this should never happen since the dropdown is populated from the users list, but it's good to be safe)
    if (!userToAdd) {
      console.error("Selected user not found in users list");
      return
    };

    // Create a new users array with the new user added, ensuring we don't mutate the existing state directly
    const updatedUsers = [
      ...(currentProject.Users || []),
      { ...userToAdd, Role: "Member" },
    ];
    setCurrentProject(
      new Project({
        ...currentProject,
        Users: updatedUsers,
      }),
    );

    // Reset the new user selection to the default option
    setNewUser("NA");
  };
  //#endregion

  return (
    <OverCard isOpen={isOpen} onClose={onClose}>
      <form className="card-form" onSubmit={onSubmit}>
        <h2 className="form-header">Project</h2>
        <div className="form-main">
          <div className="form-input">
            <h4 className="label" htmlFor="name">
              Project Name:
            </h4>
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
            <h4 className="label" htmlFor="description">
              Description:
            </h4>
            <textarea
              name="Description"
              className="input"
              value={currentProject.Description}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <div className="form-input">
            <h4 className="label">Add User:</h4>
            <select
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              className="input"
            >
              <option key="NA" value="NA">Select a user</option>
              {avaliableUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.5rem" }}>
              <IconButton
                imageUrl={plus}
                alt="Add user"
                bgColour={"var(--primary-light-20)"}
                onClick={handleAddUser}
              />
            </div>
            </div>
            <div className="form-input">
          </div>
        </div>
        <div className="form-buttons">
          <button className="button" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="button" type="submit">
            Save
          </button>
        </div>
      </form>
    </OverCard>
  );
};
