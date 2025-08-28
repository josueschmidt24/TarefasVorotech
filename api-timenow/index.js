import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import cors from "cors";   // <--- importa o cors
import timeRoutes from "./routes/timenow.js";

const app = express();
const PORT = 3333;

// habilita CORS para permitir requisições do React
app.use(cors());

// Logs detalhados
app.use(morgan("combined"));

// Limite de requisições: 60 por minuto por IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  message: {
    error: "Muitas requisições. Aguarde 1 minuto antes de tentar novamente."
  }
});
app.use(limiter);

// Rota raiz
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(
    JSON.stringify(
  {
    message: "API Timenow em execução",
    usage: "Acesse /timenow?tz=America/Sao_Paulo para obter a data/hora atual",
    info: "Substitua o valor de 'tz' por qualquer fuso horário suportado (ex: America/New_York, Europe/London, Asia/Tokyo)"
  },
  null,
  2
)

  );
});

// Rotas da API
app.use("/", timeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});