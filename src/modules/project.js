export class Project {
  /**
   * Constructs a Project object using a configuration object.
   * This allows properties to be set by name, in any order.
   *
   * @param {Object} [config={}] - The configuration object for the Project.
   * @param {number} [config.Id=0] - The unique identifier for the project.
   * @param {string} [config.Name=""] - The name of the project.
   * @param {string} [config.Description=""] - A brief description of the project.
   * @param {string[]} [config.Users=[""]] - An array of usernames or IDs associated with the project.
   */
  constructor({
    Id = null,
    Name = "",
    Description = "",
    Users = [""] // Default matches the original structure with an empty string array element
  } = {}) {
    this.Id = Id;
    this.Name = Name;
    this.Description = Description;
    this.Users = Users;
  }
}

// Example usage:
// const MarketingProject = new Project({
//   Name: "Q4 Campaign",
//   Users: ["anna", "john", "maria"]
// });