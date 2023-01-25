const AbstractManager = require("./AbstractManager");

class RewardManager extends AbstractManager {
  constructor() {
    super({ table: "reward" });
  }

  find(id) {
    return this.connection.query(
      `select reward.user_id, badge.label, badge.picture, reward.obtentionDate from ${this.table} JOIN badge ON reward.badge_id = badge.id where reward.user_id = ?`,
      [id]
    );
  }
}

module.exports = RewardManager;
