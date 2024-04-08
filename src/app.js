import Fastify from 'fastify'
import fastifJwt from '@fastify/jwt'
import 'reflect-metadata'
import database from './database/index.js'
import registerRoutes from './routes/index.js'
import handleJoiValidation from './utils/handle-joi-validation-error.js'
import logger from '@utils/logger.js'
import configs from '@configs/configs.js'

const fastify = Fastify({
    logger: true
})

registerRoutes(fastify)
fastify.register(fastifJwt, {
    secret: configs.jwt.secret_key
})

fastify.setErrorHandler((error, _, reply) => {
    if (error.isJoi) {
       const response = handleJoiValidation(error)
       return reply.status(response.statusCode).send({ message: response.error })
    }

    if (error.isApiError) {
        return reply.status(error.statusCode).send({ message: error.error })
    } 

    logger.error(error, 'unexpected Error')
    return reply.status(500).send({ message: 'Internal Server Error' })
    
})

try {
    await database.initialize()
    console.log('database up!!!')
} catch (ex) {
    console.log(ex)
    console.log('database down')
}

fastify.get('/health', async (req, res) => {
    return res.send()
})


export default fastify