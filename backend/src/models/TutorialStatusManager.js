const AbstractManager = require("./AbstractManager");

class TutoManager extends AbstractManager {
  constructor() {
    super({ table: "tutorialStatus" });
  }

  // GET ALL TUTO BY USER ID
  findAllByUserId(tutorialStatus) {
    return this.connection.query(
      `select * from ${this.table} join tuto on ${this.table}.tuto_id = tuto.id where user_id = ?`,
      [tutorialStatus.user_id]
    );
  }

  // GET ALL UNSTARTED TUTO BY USER ID
  findAllUnstartedTuto(tutorialStatus) {
    return this.connection.query(
      `select * from ${this.table} join tuto on ${this.table}.tuto_id = tuto.id where user_id = ? and status = "unstarted"`,
      [tutorialStatus.user_id]
    );
  }

  // GET ALL STARTED TUTO BY USER ID
  findAllStartedTuto(tutorialStatus) {
    return this.connection.query(
      `select * from ${this.table} join tuto on ${this.table}.tuto_id = tuto.id where user_id = ? and status = "started"`,
      [tutorialStatus.user_id]
    );
  }

  // GET ALL FINISHED TUTO BY USER ID
  findAllFinishedTuto(tutorialStatus) {
    return this.connection.query(
      `select * from ${this.table} join tuto on ${this.table}.tuto_id = tuto.id where user_id = ? and status = "finished"`,
      [tutorialStatus.user_id]
    );
  }

  // ADD A TUTO TO THE TUTORIAL STATUS LIST
  addTutoToTutorialStatusList(tutorialStatus) {
    return this.connection.query(
      `insert into ${this.table} (tuto_id, user_id) values (?, ?)`,
      [tutorialStatus.tuto_id, tutorialStatus.user_id]
    );
  }

  postToStarted(tutorialStatus) {
    return this.connection.query(
      `insert into ${this.table}  (tuto_id, user_id, status) 
      VALUES (?, ?, "started")`,
      [tutorialStatus.tuto_id, tutorialStatus.user_id]
    );
  }

  updateToFinished(tutorialStatus) {
    return this.connection.query(
      `update ${this.table} set status = "finished" where user_id = ? and tuto_id = ?`,
      [tutorialStatus.user_id, tutorialStatus.tuto_id]
    );
  }

  addTutoStatus(tutorialStatus) {
    return this.connection.query(
      `insert into ${this.table} (tuto_id, user_id) values (?, ?)`,
      [tutorialStatus.tuto_id, tutorialStatus.user_id]
    );
  }
}

module.exports = TutoManager;
