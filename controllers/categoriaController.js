const categoriaService = require('../services/categoriaService');

const categoriaController = {
  getAll: async (req, res) => {
    try {
      const categorias = await categoriaService.listarCategorias();
      res.json(categorias);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const { nome } = req.body;
      const novaCategoria = await categoriaService.criarCategoria(nome);
      res.status(201).json(novaCategoria);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const categoriaAtualizada = await categoriaService.atualizarCategoria(id, nome);
      if (categoriaAtualizada) {
        res.json({ message: "Categoria atualizada com sucesso" });
      } else {
        res.status(404).json({ error: "Categoria não encontrada" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const categoriaExcluida = await categoriaService.excluirCategoria(id);
      if (categoriaExcluida) {
        res.json({ message: "Categoria excluída com sucesso" });
      } else {
        res.status(404).json({ error: "Categoria não encontrada" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = categoriaController;
