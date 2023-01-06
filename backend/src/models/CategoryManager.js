// Categories won't be available to edit in frontside for the moment

const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (name, icon, position) values (?, ?, ?)`,
      [category.name, category.icon, category.position]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${this.table} set name = ?, icon = ?, position = ? where id = ?`,
      [category.name, category.icon, category.position, category.id]
    );
  }
}

module.exports = CategoryManager;
