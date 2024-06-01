const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());

const users = [
  {
    fullName: "Lucas",
    email: "lucas@example.com",
    cpf: "000.000.000-00",
    password: "123",
  },
];

// Rota GET para obter todos os usuários
app.get("/usuarios", function (request, response) {
  response.json(users);
});

// Rota POST para adicionar um novo usuário
app.post("/usuarios", function (request, response) {
  const newUser = request.body;

  if (newUser && newUser.fullName && newUser.email && newUser.cpf && newUser.password) {
    users.push(newUser);
    response.status(201).json(newUser);  // Responder com o novo usuário adicionado
  } else {
    response.status(400).json({ error: "Dados inválidos" });  // Responder com um erro se os dados estiverem inválidos
  }
});

// Use as rotas definidas em userRoutes para o endpoint /users
app.use("/users", userRoutes);

// Use as rotas definidas em authRoutes para o endpoint /auth
app.use("/auth", authRoutes);

app.listen(3001, () => console.log("servidor rodando na porta 3001"));
