const db = require('../config/db');

const Categoria = {
  // Lista todas as categorias
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM categorias', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  // Cria uma nova categoria
  create: (nome) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO categorias (nome) VALUES (?)', [nome], (err, result) => {
        if (err) reject(err);
        resolve({ id: result.insertId, nome });
      });
    });
  },

  // Atualiza uma categoria existente
  update: (id, nome) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE categorias SET nome = ? WHERE id = ?', [nome, id], (err, result) => {
        if (err) reject(err);
        resolve(result.affectedRows > 0);
      });
    });
  },

  // Exclui uma categoria existente
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM categorias WHERE id = ?', [id], (err, result) => {
        if (err) reject(err);
        resolve(result.affectedRows > 0);
      });
    });
  }
};

module.exports = Categoria;
