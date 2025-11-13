import { useState, useEffect } from "react";
import { SideCard } from "../navigation/side-card";
import { Task } from "../../modules/task";
import { urgencyLevels } from "../../modules/urgency";
import "../../utils/date-utils";
import { dateToIso, isoToDate } from "../../utils/date-utils";

export const EditTask = ({
  task = null,
  categories = []
}) => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  
  //#region Effects
  useEffect(() => {
    if(task){
      setCurrentTask({
        ...task,
        StartDate: dateToIso(task?.Start) || "",
        EndDate: dateToIso(task?.End) || "",
        BecomesUrgent: dateToIso(task?.BecomesUrgent) || ""
      });
    }
  }, [task]);

  useEffect(() => {
    if(currentTask != null) {
      setIsOpen(currentTask != null);
    }
  }, [currentTask]);
  //#endregion

  //#region Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedTask = new Task({
      ...currentTask,
      [name]: value,
    });

    setCurrentTask(updatedTask);
  };

  const handleCheckbox = (event) => {
    // Get the checkbox state (checked or not)
    const isChecked = event.target.checked;

    // The name of the input field
    const name = event.target.name; 

    // Update the currentTask state
    setCurrentTask(prevTask => ({
      ...prevTask,
      [name]: isChecked
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {};
  //#endregion

  if(currentTask == null) {
    return null;
  }

  return (
    <SideCard isOpen={isOpen} onClose={handleClose}>
      <form
        className="pane-form"
        onSubmit={(e) => {handleSubmit(e)}}
      >
        <h2 className="pane-header">
          Task
        </h2>
        <div className="pane-main">
          <div className="form-input">
            <h4 className="label" htmlFor="name">
              Task Name
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
              Category
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
            { categories.length > 0 && (
              <datalist id="category-list">
                {categories.map((cat, index) => (
                  <option key={index} value={cat} />
                ))}
              </datalist>
            )}
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="startDate">
              Start Date
            </h4>
            <input
              type="date"
              name="StartDate"
              className="input"
              value={currentTask.StartDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="endDate">
              End Date
            </h4>
            <input
              type="date"
              name="EndDate"
              className="input"
              value={currentTask.EndDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="urgency">
              Urgency Level
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
          <div className="form-checkbox">
            <h4 className="label" htmlFor="automateUrgency">
              Auto Urgency
            </h4>
            <input
              type="checkbox"
              name="AutomateUrgency"
              className="checkbox"
              checked={currentTask.AutomateUrgency || false}
              onChange={handleCheckbox}
            />
          </div>
          <div className="form-input">
            <h4 className="label" htmlFor="becomesUrgent">
              Become Urgent At
            </h4>
            <input
              type="date"
              name="BecomesUrgent"
              className="input"
              disabled={!currentTask.AutomateUrgency}
              value={currentTask.BecomesUrgent}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="pane-buttons">
          <button className="button" type="button" onClick={handleClose}>
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
