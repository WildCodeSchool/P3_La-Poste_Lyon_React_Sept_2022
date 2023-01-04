// Categories won't be available to edit in frontside for the moment

const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (name, short_description, icon, position) values (?, ?, ?, ?)`,
      [
        category.name,
        category.short_description,
        category.icon,
        category.position,
      ]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${this.table} set name = ?, short_description = ?, icon = ?, position = ? where id = ?`,
      [
        category.name,
        category.short_description,
        category.icon,
        category.position,
        category.id,
      ]
    );
  }
}

module.exports = CategoryManager;
