import AuthController from "@controllers/auth/auth.js"
import loginContractSchema from './contracts/login.js'
import validation from '@utils/validation.js'
const authController = new AuthController()

const authRoutes = (fastify, _, done) => {
    fastify.post('/auth/login', validation(loginContractSchema), authController.login.bind(authController))
    done()
}

export default authRoutes