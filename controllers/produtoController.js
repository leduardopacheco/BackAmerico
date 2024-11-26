const produtoService = require('../services/produtoService');

const produtoController = {
  getAll: async (req, res) => {
    try {
      const produtos = await produtoService.listarProdutos();
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getAllWithCategory: async (req, res) => {
    try {
      const produtos = await produtoService.listarProdutosComCategoria();
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const produto = req.body;
      const novoProduto = await produtoService.criarProduto(produto);
      res.status(201).json(novoProduto);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const produto = req.body;
      const produtoAtualizado = await produtoService.atualizarProduto(id, produto);
      if (produtoAtualizado) {
        res.json({ message: "Produto atualizado com sucesso" });
      } else {
        res.status(404).json({ error: "Produto não encontrado" });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const produtoExcluido = await produtoService.excluirProduto(id);
      if (produtoExcluido) {
        res.json({ message: "Produto excluído com sucesso" });
      } else {
        res.status(404).json({ error: "Produto não encontrado" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = produtoController;
