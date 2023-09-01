const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const secretKey = 'your-secret-key'; // Defina sua chave secreta para assinar o token

// Middleware para analisar o corpo da solicitação JSON
app.use(express.json());

// Rota para autenticação e geração de token
app.post('/login', (req, res) => {
  const { login, password } = req.body;

  if (login === 'josias@teste.com.br' && password === '123') {
    jwt.sign({ user: { id: 1, login: 'josias@teste.com.br' } }, secretKey, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        res.status(500).json({ error: 'Failed to generate token' });
      } else {
        res.json({ token });
      }
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
