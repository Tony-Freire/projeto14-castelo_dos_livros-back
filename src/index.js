import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import { CreateUser, SignUp } from "./contollers/AuthControllers.js";
import db from "../db.js";
import {getBooks, getBookInfo} from "./contollers/booksController.js";



dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());


server.post('/sign', CreateUser)
server.post('/sign-up', SignUp)
server.get('/products',getBooks)
server.get('/products/slug',getBookInfo)



server.listen(process.env.PORT, () => console.log("The magic happens on port" + process.env.PORT))
