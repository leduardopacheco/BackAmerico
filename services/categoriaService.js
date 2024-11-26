const Categoria = require('../models/categoriaModel');

const categoriaService = {
  listarCategorias: async () => {
    return await Categoria.getAll();
  },

  criarCategoria: async (nome) => {
    if (!nome) {
      throw new Error("O nome da categoria é obrigatório");
    }
    return await Categoria.create(nome);
  },

  atualizarCategoria: async (id, nome) => {
    if (!nome) {
      throw new Error("O nome da categoria é obrigatório");
    }
    return await Categoria.update(id, nome);
  },

  excluirCategoria: async (id) => {
    return await Categoria.delete(id);
  },
};

module.exports = categoriaService;
