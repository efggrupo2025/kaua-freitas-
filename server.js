const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const users = [];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const found = users.find(u => u.username === username && u.password === password);
  if (found) {
    res.json({ message: "Login realizado com sucesso!" });
  } else {
    res.status(401).json({ message: "Usuário ou senha inválidos" });
  }
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: "Usuário registrado com sucesso!" });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
