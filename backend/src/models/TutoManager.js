const AbstractManager = require("./AbstractManager");

class TutoManager extends AbstractManager {
  constructor() {
    super({ table: "tuto" });
  }

  insert(tuto) {
    return this.connection.query(
      `insert into ${this.table} (name, short_description, content, category_id, position) values (?, ?, ?, ?, ?)`,
      [
        tuto.name,
        tuto.short_description,
        tuto.content,
        tuto.category_id,
        tuto.position,
      ]
    );
  }

  update(tuto) {
    return this.connection.query(
      `update ${this.table} set name = ?, short_description = ?, content = ?, category_id = ?, position = ? where id = ?`,
      [
        tuto.name,
        tuto.short_description,
        tuto.content,
        tuto.category_id,
        tuto.position,
        tuto.id,
      ]
    );
  }
}

module.exports = TutoManager;
