const AbstractManager = require("./AbstractManager");

class ResponseManager extends AbstractManager {
  constructor() {
    super({ table: "response" });
  }
}

module.exports = ResponseManager;
