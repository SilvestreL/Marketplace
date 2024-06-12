const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db"); 

// Login do usuário
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Log de entrada
  console.log("Login attempt:", { email, password });

  if (!email || !password) {
    console.error("Email e senha são obrigatórios");
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  const q = "SELECT * FROM usuarios WHERE email = ?";
  db.query(q, [email], async (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Erro no servidor" });
    }

    if (data.length === 0) {
      console.error("Usuário não encontrado");
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const user = data[0];

    // Verificar a senha
    try {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        console.error("Senha incorreta");
        return res.status(401).json({ error: "Senha incorreta" });
      }
    } catch (bcryptError) {
      console.error("Erro ao comparar a senha", bcryptError);
      return res.status(500).json({ error: "Erro ao verificar a senha" });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, "seuSegredoJWT", { expiresIn: "1h" });
    console.log("Login bem-sucedido, token gerado:", token);

    return res.status(200).json({ message: "Login bem-sucedido", token });
  });
};
