import database from '../index.js'
import User from '../entities/User.js'

const userRepository = database.getRepository(User)

export default userRepository
