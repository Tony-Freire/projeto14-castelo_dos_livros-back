import  express  from "express";
import data from "./data.js";
import dotenv from "dotenv";
import cors from "cors";

import getBooks from "./controllers/booksController.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use([cors(), express.json()]);


app.get('/products',getBooks);

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)});