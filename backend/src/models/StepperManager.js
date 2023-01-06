// Stepppers won't be available to edit in frontside for the moment

const AbstractManager = require("./AbstractManager");

class StepperManager extends AbstractManager {
  constructor() {
    super({ table: "stepper" });
  }

  // Be careful ! The tutoId is called tuto_id in the database, maybe we will have a problem to find it.
  find(tutoId) {
    return this.connection.query(
      `select * from  ${this.table} where tuto_id = ?`,
      [tutoId]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(stepper) {
    return this.connection.query(
      `insert into ${this.table} (position, content, tuto_id) values (?, ?, ?)`,
      [stepper.position, stepper.content, stepper.tuto_id]
    );
  }

  update(stepper) {
    return this.connection.query(
      `update ${this.table} set position = ?, content = ?, tuto_id = ? where tuto_id = ?`,
      [stepper.position, stepper.content, stepper.tuto_id, stepper.tuto_id]
    );
  }
}

module.exports = StepperManager;
