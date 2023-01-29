const AbstractManager = require("./AbstractManager");

class QuestionManager extends AbstractManager {
  constructor() {
    super({ table: "question" });
  }

  findAllQuestion() {
    return this.connection.query(`select * from ${this.table}`);
  }

  addQuestion(question) {
    return this.connection.query(
      `insert into ${this.table} (content, quiz_id) values (?, ?)`,
      [question.content, question.quiz_id]
    );
  }

  updateQuestion(question) {
    return this.connection.query(
      `update from ${this.table} set content = ?, quiz_id= ? where id = ?`,
      [question.content, question.quiz_id, question.id]
    );
  }

  deleteQuestion(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`[id]);
  }
}

module.exports = QuestionManager;
