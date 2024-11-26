const Produto = require('../models/produtoModel');

const produtoService = {
  listarProdutos: async () => {
    try {
      const produtos = await Produto.getAll();
      return produtos;
    } catch (error) {
      throw new Error('Erro ao listar produtos: ' + error.message);
    }
  },

  listarProdutosComCategoria: async () => {
    try {
      const produtos = await Produto.getAllWithCategory();
      return produtos;
    } catch (error) {
      throw new Error('Erro ao listar produtos com categorias: ' + error.message);
    }
  },

  criarProduto: async (produto) => {
    if (!produto.nome || !produto.preco || !produto.categoria_id) {
      throw new Error("Nome, preço e categoria são obrigatórios");
    }

    try {
      const novoProduto = await Produto.create(produto);
      return novoProduto;
    } catch (error) {
      throw new Error('Erro ao criar produto: ' + error.message);
    }
  },

  atualizarProduto: async (id, produto) => {
    if (!produto.nome || !produto.preco || !produto.categoria_id) {
      throw new Error("Nome, preço e categoria são obrigatórios");
    }

    try {
      const produtoAtualizado = await Produto.update(id, produto);
      return produtoAtualizado;
    } catch (error) {
      throw new Error('Erro ao atualizar produto: ' + error.message);
    }
  },

  excluirProduto: async (id) => {
    try {
      const produtoExcluido = await Produto.delete(id);
      return produtoExcluido;
    } catch (error) {
      throw new Error('Erro ao excluir produto: ' + error.message);
    }
  },
};

module.exports = produtoService;
