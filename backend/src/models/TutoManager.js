const AbstractManager = require("./AbstractManager");

class TutoManager extends AbstractManager {
  constructor() {
    super({ table: "tuto" });
  }

  find(id) {
    return this.connection.query(
      `select title, short_description, introduction_text, category_id, position from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select title, short_description, introduction_text, category_id, position from  ${this.table}`
    );
  }

  insert(tuto) {
    return this.connection.query(
      `insert into ${this.table} (title, short_description, introduction_text, category_id, position) values (?, ?, ?, ?, ?)`,
      [
        tuto.title,
        tuto.short_description,
        tuto.introduction_text,
        tuto.category_id,
        tuto.position,
      ]
    );
  }

  update(tuto) {
    return this.connection.query(
      `update ${this.table} set title = ?, short_description = ?, introduction_text = ?, category_id = ?, position = ? where id = ?`,
      [
        tuto.title,
        tuto.short_description,
        tuto.introduction_text,
        tuto.category_id,
        tuto.position,
        tuto.id,
      ]
    );
  }
}

module.exports = TutoManager;
