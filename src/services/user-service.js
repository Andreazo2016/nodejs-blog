import userRepository from "@database/repositories/user-repository.js"
class UserService {
    async save({ name, email, password, type }) {
        return userRepository.save({
            name, email, password, type, created_at: new Date()
        })
    }

    async findByEmail(email) {
        return userRepository.findOneBy({ email })
    }

    async findAll({ offset, limit }) {
       const count = await userRepository.count({})
       const list = await userRepository.find({ skip: offset, take: limit })
       return {
        count,
        list
       }
    }
}

export default UserService
