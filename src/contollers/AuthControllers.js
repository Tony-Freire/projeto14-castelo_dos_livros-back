import db from "../../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid} from "uuid";
import { signSchema, loginSchema } from "../schemas/AuthSchema.js";

async function CreateUser(req, res){
    const {username, email, password, repeat_password, image} = req.body;

        const validation = signSchema.validate({username, email, password, repeat_password, image});

        if(validation.error){
            const error = validation.error.details.map((detail) => detail.message)
            return res.status(422).send(error)
        }

        try {
            const user = await db.collection('users').findOne({username})
            if(user) {
                return res.status(401).send("Usuário já existente!")
            }
            
        } catch (error) {
          return res.send("erro ao conectar com o banco!")
        }

        const passwordHash = bcrypt.hashSync(password, 12)

        db.collection('users').insertOne({
            username,
            email,
            password:passwordHash,
            image

        })

        res.sendStatus(201)
}

async function SignUp(req, res){
        const { username, password} = req.body;

        const validation = loginSchema.validate({username, password})

        if(validation.error){
            const error = validation.error.details.map((detail) => detail.message)
            return res.status(422).send(error)
        }

        try {
            const user = await db.collection('users').findOne({username});
            if(user && bcrypt.compareSync(password,user.password)){
                const token = uuid();

                await db.collection('sessions').insertOne({
                    userId:user._id,
                    token
                })

                return res.status(201).send(token)
            } else {
                return res.status(401).send("Usuário e/ou senha incorretos!")
            }

        } catch (error) {
            console.log(error.message)
         }

        res.send("ok");

}


export { CreateUser, SignUp }