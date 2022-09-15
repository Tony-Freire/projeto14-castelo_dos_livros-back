import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import { CreateUser, SignUp } from "./src/contollers/AuthControllers.js";




dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());


server.post('/sign', CreateUser)
server.post('/sign-up', SignUp)


server.listen(5000, () => console.log("The magic happens on port 5000"))
