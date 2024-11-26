const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtoRoutes);
app.use('/api/categorias', categoriaRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
