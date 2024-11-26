const express = require('express');
const categoriaController = require('../controllers/categoriaController');
const router = express.Router();

router.get('/', categoriaController.getAll);
router.post('/', categoriaController.create); 
router.put('/:id', categoriaController.update); 
router.delete('/:id', categoriaController.delete);

module.exports = router;
