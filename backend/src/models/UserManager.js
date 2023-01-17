const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, phone, hashedPassword, profilePicture) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone,
        user.hashedPassword,
        user.profilePicture,
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

  updatePasswordToken(user) {
    return this.connection.query(
      `update ${this.table} set passwordToken = ?  where id = ?`,
      [user.passwordToken, user.id]
    );
  }

  updatePassword(user) {
    return this.connection.query(
      `update ${this.table} set hashedPassword = ?  where passwordToken = ?`,
      [user.hashedPassword, user.passwordToken]
    );
  }

  selectToken(passwordToken) {
    return this.connection.query(
      `select * from ${this.table} where passwordToken = ?`,
      [passwordToken]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = UserManager;
