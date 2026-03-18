export class User {
  /**
   * Constructs a User object using a configuration object.
   * This allows properties to be set by name, in any order, and only requires
   * the properties you wish to override from the defaults.
   * @param {Object} [config={}] - The configuration object for the User.
   * @param {?string} [config.Id=null] - Unique identifier for the user.
   * @param {string} [config.Name=""] - The name of the user.
   * @param {string} [config.Email=""] - The email address of the user.
   */
  constructor({
    Id = null,
    Name = "",
    Email = "",
  } = {}) {
    this.Id = Id;
    this.Name = Name;
    this.Email = Email;
  }
}