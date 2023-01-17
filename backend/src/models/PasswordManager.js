const AbstractManager = require("./AbstractManager");

class PasswordManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  updatePasswordToken(user) {
    return this.connection.query(
      `update ${this.table} set passwordToken = ?  where id = ?`,
      [user.passwordToken, user.id]
    );
  }
}

module.exports = PasswordManager;
