export class Task {
  /**
   * Constructs a Task object using a configuration object.
   * This allows properties to be set by name, in any order, and only requires
   * the properties you wish to override from the defaults.
   *
   * @param {Object} [config={}] - The configuration object for the Task.
   * @param {?number} [config.Id=0] - Unique identifier for the task.
   * @param {?number} [config.ParentId=null] - ID of a parent task.
   * @param {number} [config.ProjectId=0] - ID of the project the task belongs to.
   * @param {string} [config.Name=""] - The name or title of the task.
   * @param {?string} [config.Category=null] - The task category.
   * @param {string} [config.CreatedBy=""] - The user who created the task.
   * @param {?Date} [config.Start=null] - The planned start date.
   * @param {Date} [config.End=new Date()] - The planned end/due date.
   * @param {number} [config.Urgency=0] - Manual urgency level (0-5).
   * @param {boolean} [config.AutomateUrgency=true] - Flag for automated urgency calculation.
   * @param {?Date} [config.BecomesUrgent=new Date()] - Date when urgency is triggered.
   * @param {string[]} [config.AssignedTo=[""]] - Array of users assigned to the task.
   * @param {number} [config.Status=0] - The task status (e.g., 0: Pending).
   */
  constructor({
    Id = null,
    ParentId = null,
    ProjectId = 0,
    Name = "",  
    Category = null,
    CreatedBy = "",
    Start = null,
    End = new Date(),
    Urgency = 0,
    AutomateUrgency = false,
    BecomesUrgent = null,
    AssignedTo = [""], // Changed from [] to [""] to match the original structure's default
    Status = 0
  } = {}) {
    this.Id = Id;
    this.ParentId = ParentId;
    this.ProjectId = ProjectId;
    this.Name = Name;
    this.Category = Category;
    this.CreatedBy = CreatedBy;
    this.Start = Start;
    this.End = End;
    this.Urgency = Urgency;
    this.AutomateUrgency = AutomateUrgency;
    if(BecomesUrgent){
      this.BecomesUrgent = BecomesUrgent;
    } else if (Start && AutomateUrgency) {
      this.BecomesUrgent = Start.setDate(Start.getDate() + 1)
    } else {
      this.BecomesUrgent = null;
    }
    this.AssignedTo = AssignedTo;
    this.Status = Status;
  }
}

// Example usage:
// const urgentDesignTask = new Task({
//   Name: "Finalize Logo Design",
//   ProjectID: 5,
//   AssignedTo: ["designer_A"],
//   Urgency: 5 // Override default of 0
// });