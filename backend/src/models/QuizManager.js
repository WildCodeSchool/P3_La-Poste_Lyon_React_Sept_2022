const AbstractManager = require("./AbstractManager");

class QuizManager extends AbstractManager {
  constructor() {
    super({ table: "quiz" });
  }
}

module.exports = QuizManager;
