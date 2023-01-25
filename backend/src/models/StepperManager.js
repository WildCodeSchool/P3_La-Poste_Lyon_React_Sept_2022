// Stepppers won't be available to edit in frontside for the moment

const AbstractManager = require("./AbstractManager");

class StepperManager extends AbstractManager {
  constructor() {
    super({ table: "stepper" });
  }

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
      "INSERT INTO stepper (positionStep, content, tuto_id) values (?, ?, LAST_INSERT_ID())",
      [stepper.positionStep, stepper.content, stepper.tuto_id]
    );
  }

  insertAll(steps, tutoId) {
    // we map to create as much steps we are receiving
    const stepsArray = steps.map((step) => [
      step.positionStep,
      step.content,
      tutoId,
    ]);
    return this.connection.query(
      `INSERT INTO stepper (positionStep, content, tuto_id) values ?`,
      [stepsArray]
    );
  }

  /* Delete the step from the tutorial */
  deleteAll(tutoId) {
    return this.connection.query(
      `delete from ${this.table} where tuto_id = ?`,
      [tutoId]
    );
  }

  update(stepper) {
    return this.connection.query(
      `update ${this.table} set positionStep = ?, content = ?, tuto_id = ? where tuto_id = ?`,
      [stepper.positionStep, stepper.content, stepper.tuto_id, stepper.tuto_id]
    );
  }
}

module.exports = StepperManager;
