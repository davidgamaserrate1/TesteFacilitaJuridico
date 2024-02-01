import app from "./src/app.js";
import { dbConnection } from "./database/config/dbConnect.js";
import dotenv from 'dotenv'

dotenv.config()
 
const port = process.env.SERVER_PORT || 4001;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });