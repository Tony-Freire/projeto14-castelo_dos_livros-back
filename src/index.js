import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import { CreateUser, SignUp } from "./contollers/AuthControllers.js";
import db from "../db.js";




dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());


server.post('/sign', CreateUser)
server.post('/sign-up', SignUp)

server.post('/test', async (req, res) =>{
    const {user} = req.body ;

    db.collection('test').insertOne({
        user
    })

    return res.send(user)
})

server.get('/test', async (req, res) =>{

try {
    const users = await db.collection('test').find().toArray();
    res.send(users)
} catch (error) {
    console.log(error);
}
    

    return res.send("passou direto!")
})


server.listen(process.env.PORT, () => console.log("The magic happens on port" + process.env.PORT))
