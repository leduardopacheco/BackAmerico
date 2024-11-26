const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.get('/', produtoController.getAll);
router.get('/with-category', produtoController.getAllWithCategory);
router.post('/', produtoController.create);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.delete);

module.exports = router;
