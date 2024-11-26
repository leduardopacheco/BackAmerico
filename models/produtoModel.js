const db = require('../config/db');

const Produto = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM produtos', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  create: (produto) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO produtos SET ?', produto, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  update: (id, produto) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE produtos SET ? WHERE id = ?', [produto, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM produtos WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  getAllWithCategory: () => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT p.id, p.nome, p.descricao, p.preco, p.categoria_id, c.nome AS categoria_descricao
        FROM produtos p
        JOIN categorias c ON p.categoria_id = c.id
      `;
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
};

module.exports = Produto;
