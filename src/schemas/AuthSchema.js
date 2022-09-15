import joi from "joi";

const signSchema = joi.object({
    username:joi.string().required(),
    email:joi.string().email().required(),
    image:joi.string().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    repeat_password:joi.ref('password')
})

const loginSchema = joi.object({
    username:joi.string().required(),
    password:joi.string().required()
})

export {signSchema, loginSchema}