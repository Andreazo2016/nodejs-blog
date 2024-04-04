import Joi from 'joi'
const schema = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        type: Joi.string().required(),
    }).required()
}

export default schema