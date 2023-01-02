const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, phone, password, profilePicture, level, admin) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.password,
        user.profilePicture,
        user.level,
        user.admin,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ? , lastname = ? , email = ? , phone = ? , password = ? , profilePicture = ? , level = ? , admin  = ?  where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.password,
        user.profilePicture,
        user.level,
        user.admin,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
