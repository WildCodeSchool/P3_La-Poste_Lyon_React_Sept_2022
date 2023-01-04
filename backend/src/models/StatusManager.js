// Categories won't be available to edit in frontside for the moment

const AbstractManager = require("./AbstractManager");

class StatusManager extends AbstractManager {
  constructor() {
    super({ table: "status" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(status) {
    return this.connection.query(
      `insert into ${this.table} (noStarted, inProgress, finished) values (?, ?, ?)`,
      [status.noStarted, status.inProgress, status.finished]
    );
  }

  update(status) {
    return this.connection.query(
      `update ${this.table} set noStarted = ?, inProgress = ?, finished = ? where id = ?`,
      [status.noStarted, status.inProgress, status.finished, status.id]
    );
  }
}

module.exports = StatusManager;
