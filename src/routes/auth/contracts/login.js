import Joi from 'joi'
const schema = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    }).required()
}

export default schema