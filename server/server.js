const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importar cors
const { multiplicarMatrices } = require('./controllers_multiplicacion');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());  // Usar cors en tu aplicación

app.post('/multiplicar-matrices', (req, res) => {
  const { matriz1, matriz2 } = req.body;

  if (!matriz1 || !matriz2 || matriz1[0].length !== matriz2.length) {
    res.status(400).json({ error: 'Las matrices no son válidas para la multiplicación.' });
    return;
  }

  const resultado = multiplicarMatrices(matriz1, matriz2);
  res.json({ resultado });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
