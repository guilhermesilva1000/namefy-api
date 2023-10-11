import express from "express";
import path from "path";
import routes from "./routes";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(routes); // Adiciona as rotas definidas no arquivo routes/index.ts

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
