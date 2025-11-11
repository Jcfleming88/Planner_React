import { useState } from "react";
import { SideCard } from "../navigation/side-card";
import { Task } from "../../modules/task";
import { urgencyLevels } from "../../modules/urgency";

export const EditTask = ({
  isOpen = false,
  task = null,
  onClose = null,
  onSubmit = null,
}) => {
  const [currentTask, setCurrentTask] = useState(task ? task : new Task());

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedTask = new Task({
      ...currentTask,
      [name]: value,
    });

    setCurrentTask(updatedTask);
  };

  return (
    <SideCard isOpen={isOpen} onClose={onClose}>
      <form
        className="pane-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) onSubmit(currentTask);
        }}
      >
        <h2 className="pane-header">
          Task
        </h2>
        <div className="pane-main">
          <div className="form-input">
            <h4 className="label" htmlFor="name">
              Task Name:
            </h4>
            <input
              type="text"
              name="Name"
              className="input"
              value={currentTask.Name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="pane-side">
          <div className="form-input">
            <h4 className="label" htmlFor="category">
              Category:
            </h4>
            <input
              type="text"
              name="Category"
              className="input"
              list="category-list"
              value={currentTask.Category || ""}
              onChange={handleChange}
              autoComplete="off"
            />
            <datalist id="category-list">
              <option value="Work" />
              <option value="Personal" />
              <option value="Urgent" />
              <option value="Home" />
            </datalist>
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="startDate">
              Start Date:
            </h4>
            <input
              type="date"
              name="StartDate"
              className="input"
              value={currentTask.StartDate || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="endDate">
              End Date:
            </h4>
            <input
              type="date"
              name="EndDate"
              className="input"
              value={currentTask.EndDate || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="urgency">
              Urgency Level:
            </h4>
            <select
              name="Urgency"
              className="input"
              value={currentTask.Urgency || ""}
              onChange={handleChange}
            >
                {Object.keys(urgencyLevels).sort((a, b)=>a-b).map((key)=>{
                    return (<option key={key} value={key}>{urgencyLevels[key]}</option>)
                })}
            </select>
          </div>
          <div className="form-input">
            <label className="label" htmlFor="setBecomesUrgent">
              Set Becomes Urgent Date:
            </label>
            <input
              type="checkbox"
              name="SetBecomesUrgent"
              checked={!!currentTask.BecomesUrgent}
              onChange={(e) => {
                if (e.target.checked) {
                  setCurrentTask(
                    new Task({
                      ...currentTask,
                      BecomesUrgent: currentTask.BecomesUrgent || "",
                    })
                  );
                } else {
                  setCurrentTask(
                    new Task({
                      ...currentTask,
                      BecomesUrgent: "",
                    })
                  );
                }
              }}
            />
            {currentTask.BecomesUrgent !== "" && (
              <input
                type="date"
                name="BecomesUrgent"
                className="input"
                value={currentTask.BecomesUrgent || ""}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
        <div className="pane-buttons">
          <button className="button" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="button" type="submit">
            Save
          </button>
        </div>
      </form>
    </SideCard>
  );
};
