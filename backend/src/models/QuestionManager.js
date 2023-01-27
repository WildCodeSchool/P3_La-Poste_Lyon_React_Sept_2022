const AbstractManager = require("./AbstractManager");

class QuestionManager extends AbstractManager {
  constructor() {
    super({ table: "question" });
  }
}

module.exports = QuestionManager;
