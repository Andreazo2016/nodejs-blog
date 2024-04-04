import HttpStatusCode from 'http-status-codes'
import BadRequestError from '@errors/bad-request.js'
import logger from '@utils/logger.js'
import UserService from '@services/user-service.js'
import PasswordUtil from '@utils/password.js'
import { createUserDTO, listAllUsersDTO } from './dtos/index.js'
import PaginationUtil from '@utils/pagination.js'

class UserController {
    constructor() {
        this.userService = new UserService()
    }

    async login(req, res) {
        const { email, password } = req.body
        const user = await this.userService.findByEmail(email)
        logger.info('fetching user by email')
        if (!user) {
            logger.info(`E-mail does not exists: ${email}`)
            throw new BadRequestError(`E-mail/password incorrect!!`)
        }

        const isMatchPassword = PasswordUtil.compare({
            rawPassword: password,
            encryptedPassword: user.password
        })

        if(!isMatchPassword) {
            logger.info(`Password does not match`)
            throw new BadRequestError(`E-mail/password incorrect!!`)
        }
    }

    async create(req, res) {
        const { name, email, password, type } = req.body
        const user = await this.userService.findByEmail(email)
        logger.info('fetching user by email')
        if (user) {
            logger.info(`E-mail Already exists: ${email}`)
            throw new BadRequestError(`E-mail already used`)
        }
        const encryptedPassword = await PasswordUtil.encrypt(password)
        const userData = {
            name,
            email,
            password: encryptedPassword,
            type,
        }
        const userCreated = await this.userService.save(userData)
        const response = createUserDTO(userCreated)
        logger.info(response, `user created`)
        return res.code(HttpStatusCode.CREATED).send(response)
    }

    async list(req, res) {
        const { offset, limit } = PaginationUtil.paginationParam(req.query)
        logger.info('Fetching all users')
        const { list, count } = await this.userService.findAll({ offset, limit })
        const response = list.map(user => listAllUsersDTO(user))
        return res.code(HttpStatusCode.OK).send(PaginationUtil.paginatedResponse({
            total_items: count,
            limit,
            items: response
        }))
    }
}

export default UserController