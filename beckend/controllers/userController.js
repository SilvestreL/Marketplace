const bcrypt = require("bcrypt");
const db = require("../db"); 

// Recuperar usuários
exports.getUsers = (req, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json(err);
    }

    return res.status(200).json(data);
  });
};

// Criar novo usuário
exports.createUser = async (req, res) => {
  const { fullName, email, cpf, password } = req.body;

  console.log("Received data:", req.body);

  if (!fullName || !email || !cpf || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const q =
      "INSERT INTO usuarios (fullName, email, cpf, password) VALUES (?, ?, ?, ?)";
    db.query(q, [fullName, email, cpf, hashedPassword], (err, data) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json(err);
      }

      return res
        .status(201)
        .json({ message: "Usuário criado com sucesso", userId: data.insertId });
    });
  } catch (err) {
    console.error("Error hashing password:", err);
    return res.status(500).json({ error: "Erro ao processar a senha" });
  }
};
