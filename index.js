import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from './db.js';

import {getBooks, getBookInfo} from "./controllers/booksController.js";


dotenv.config();
const port = process.env.PORT || 5000;
const server = express();
server.use([cors(), express.json()]);

server.get('/products',getBooks);
server.get('/products/slug',getBookInfo)

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)});