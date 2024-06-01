const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db"); 

// Login do usuário
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  const q = "SELECT * FROM usuarios WHERE email = ?";
  db.query(q, [email], async (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Erro no servidor" });
    }

    if (data.length === 0) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const user = data[0];

    // Verificar a senha
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, "seuSegredoJWT", { expiresIn: "1h" });

    return res.status(200).json({ message: "Login bem-sucedido", token });
  });
};
