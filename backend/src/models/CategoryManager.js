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

  getProgressionTuto(id) {
    return this.connection.query(
      `SELECT 
    c.name AS 'category', 
      COUNT(CASE WHEN ts.status = 'finished' AND u.id = ? THEN 1 END) AS 'tuto_completed',
      (SELECT COUNT(*) FROM tuto WHERE category_id = c.id) as 'total_tuto'
  FROM 
      category c
      LEFT JOIN tuto t ON c.id = t.category_id
      LEFT JOIN tutorialStatus ts ON t.id = ts.tuto_id AND ts.status = 'finished'
      LEFT JOIN user u ON ts.user_id = u.id
  GROUP BY 
      c.id, c.name
  ORDER BY
      c.id;
  `,
      [id]
    );
  }
}

module.exports = CategoryManager;
