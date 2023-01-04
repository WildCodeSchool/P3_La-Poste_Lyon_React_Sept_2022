// Stepppers won't be available to edit in frontside for the moment

const AbstractManager = require("./AbstractManager");

class StepperManager extends AbstractManager {
  constructor() {
    super({ table: "stepper" });
  }

  find(id) {
    return this.connection.query(
      `select * from  ${this.table} where tuto_id = ?`,
      [id]
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
      `update ${this.table} set position = ?, content = ?, tuto_id = ? where id = ?`,
      [stepper.position, stepper.content, stepper.tuto_id, stepper.id]
    );
  }
}

module.exports = StepperManager;
