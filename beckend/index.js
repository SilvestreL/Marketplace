const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());
app.use(cors());

const users = [
  {
    name: "lucas",
    age: 30,
  },
];

app.get("/usuarios", function (request, response) {
  response.json(users);
});

app.post("/usuarios", function (request, response) {
  const newUser = request.body;
  
  if (newUser && newUser.name && typeof newUser.age === 'number') {
    users.push(newUser);
    response.status(201).json(newUser);  // Responder com o novo usuário adicionado
  } else {
    response.status(400).json({ error: "Dados inválidos" });  // Responder com um erro se os dados estiverem inválidos
  }
});

// Use the userRoutes for /users endpoint
app.use("/users", userRoutes);

app.listen(3001, () => console.log("servidor rodando"));
