const AbstractManager = require("./AbstractManager");

class QuizManager extends AbstractManager {
  constructor() {
    super({ table: "quiz" });
  }

  findAllQuiz() {
    return this.connection.query(`select * from ${this.table}`);
  }

  addQuiz(quiz) {
    return this.connection.query(
      `insert into ${this.table} (title, icon) values (?, ?)`,
      [quiz.title, quiz.icon]
    );
  }

  updateQuiz(quiz) {
    return this.connection.query(
      `update from ${this.table} set title = ?, icon = ? where id = ?`,
      [quiz.title, quiz.icon, quiz.id]
    );
  }

  deleteQuiz(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`[id]);
  }

  getAllFromQuiz(id) {
    return this.connection.query(
      `select ${this.table}.title, ${this.table}.icon, question.content, response.content, response.isCorrect from ${this.table} join question on ${this.table}.id = question.quiz_id join response on question.id = response.question_id where ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = QuizManager;
