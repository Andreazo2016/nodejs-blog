import HttpStatusCode from 'http-status-codes'
import BadRequestError from '@errors/bad-request.js'
import logger from '@utils/logger.js'
import UserService from '@services/user-service.js'
import PasswordUtil from '@utils/password.js'
import { JwtUtil } from '@utils/jwt.js'

class AuthController {

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
        const token = JwtUtil.encode({
            user_id: user.id
        })
        return res.code(HttpStatusCode.OK).send({
            id: user.id,
            name: user.name,
            email: user.email,
            token
        })
    }

}

export default AuthController