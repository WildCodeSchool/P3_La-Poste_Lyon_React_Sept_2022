const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, phone, hashedPassword, profilePicture, level, admin) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.hashedPassword,
        user.profilePicture,
        user.level,
        user.admin,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ? , lastname = ? , email = ? , phone = ? , hashedPassword = ? , profilePicture = ? , level = ? , admin  = ?  where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.hashedPassword,
        user.profilePicture,
        user.level,
        user.admin,
        user.id,
      ]
    );
  }

  delete(user) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      user.id,
    ]);
  }
}

module.exports = UserManager;
