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


server.listen(process.env.PORT, () => console.log("The magic happens on port" + process.env.PORT))
