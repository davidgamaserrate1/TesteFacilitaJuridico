import app from "./src/app.js";
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.SERVER_PORT || 4001;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });