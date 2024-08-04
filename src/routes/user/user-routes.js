import UserController from "@controllers/user/user-controller.js"
import createContractSchema from './contracts/create.js'
import validation from '@utils/validation.js'
import { multerConfig } from '@configs/multer.js'
const userController = new UserController()

const userRoutes = (fastify, _, done) => {
    fastify.post('/users', validation(createContractSchema), userController.create.bind(userController))
    fastify.get('/users', userController.list.bind(userController))
    fastify.post('/users/bulk', { preHandler: multerConfig.single('file') }, userController.bulkInsert.bind(userController))
    fastify.get('/users/documents', userController.listDocuments.bind(userController))
    done()
}

export default userRoutes