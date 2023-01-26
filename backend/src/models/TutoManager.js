const AbstractManager = require("./AbstractManager");

class TutoManager extends AbstractManager {
  constructor() {
    super({ table: "tuto" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  /* On fait une requête pour chercher toutes les infos d'un tuto et son statut en fonction de l'id du tuto et de l'id du user */
  findByIdAndUserId(id, userId) {
    return this.connection.query(
      `select ${this.table}.*, status from  ${this.table}
      LEFT JOIN tutorialstatus ON tutorialstatus.tuto_id =tuto.id AND tutorialstatus.user_id = ?
     where id = ? `,
      [userId, id]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  findAllByCategory(categoryId) {
    return this.connection.query(
      ` SELECT * FROM ${this.table} LEFT JOIN category ON ${this.table}.category_id = category.id WHERE category.id = ?`,
      [categoryId]
    );
  }

  insert(tuto) {
    return this.connection.query(
      `insert into ${this.table} (title, short_description, introduction_text, category_id) values (?, ?, ?, ?)`,
      [
        tuto.title,
        tuto.short_description,
        tuto.introduction_text,
        tuto.category_id,
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
