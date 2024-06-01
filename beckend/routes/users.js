const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota GET para obter todos os usuários
router.get("/", userController.getUsers);

// Rota POST para adicionar um novo usuário
router.post("/", userController.createUser);

module.exports = router;
