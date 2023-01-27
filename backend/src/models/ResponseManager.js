const AbstractManager = require("./AbstractManager");

class ResponseManager extends AbstractManager {
  constructor() {
    super({ table: "response" });
  }

  findAllResponse() {
    return this.connection.query(`select * from ${this.table}`);
  }

  addResponse(response) {
    return this.connection.query(
      `insert into ${this.table} (content, isCorrect, question_id) values (?, ?, ?)`,
      [response.content, response.isCorrect, response.question_id]
    );
  }

  updateResponse(response) {
    return this.connection.query(
      `update from ${this.table} set content = ?, isCorrect = ?, question_id= ? where id = ?`,
      [response.content, response.isCorrect, response.question_id, response.id]
    );
  }

  deleteResponse(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`[id]);
  }
}

module.exports = ResponseManager;
