const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, phone, profilePicture, level, admin, creationDate from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email, phone, profilePicture, level, admin, creationDate from  ${this.table}`
    );
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
      `update ${this.table} set firstname = ?, lastname = ?, phone = ? where id = ?`,
      [user.firstname, user.lastname, user.phone, user.id]
    );
  }

  updatePasswordToken(user) {
    return this.connection.query(
      `update ${this.table} set passwordToken = ?  where id = ?`,
      [user.passwordToken, user.id]
    );
  }

  updatePasswordAfterReset(user) {
    return this.connection.query(
      `update ${this.table} set hashedPassword = ?, passwordToken = NULL  where id = ?`,
      [user.hashedPassword, user.id]
    );
  }

  selectToken(passwordToken) {
    return this.connection.query(
      `select id from ${this.table} where passwordToken = ?`,
      [passwordToken]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  updateAvatar(id, profilePicture) {
    return this.connection.query(
      `update ${this.table} set profilePicture = ? where id = ?`,
      [profilePicture, id]
    );
  }
}

module.exports = UserManager;
