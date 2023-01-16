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
      "INSERT INTO stepper (positionStep, content, tuto_id) values (?, ?, LAST_INSERT_ID())",
      [stepper.positionStep, stepper.content, stepper.tuto_id]
    );
  }

  insertAll(steps, tutoId) {
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

  update(stepper) {
    return this.connection.query(
      `update ${this.table} set positionStep = ?, content = ?, tuto_id = ? where tuto_id = ?`,
      [stepper.positionStep, stepper.content, stepper.tuto_id, stepper.tuto_id]
    );
  }
}

module.exports = StepperManager;
