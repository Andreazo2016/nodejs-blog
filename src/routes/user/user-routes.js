import UserController from "@controllers/user/user-controller.js"
import createContractSchema from './contracts/create.js'
import validation from '@utils/validation.js'
const userController = new UserController()

const userRoutes = (fastify, _, done) => {
    fastify.post('/users', validation(createContractSchema), userController.create.bind(userController))
    fastify.get('/users', userController.list.bind(userController))
    done()
}

export default userRoutes