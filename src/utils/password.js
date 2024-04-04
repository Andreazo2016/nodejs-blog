import bcrypt from 'bcrypt'

class PasswordUtil {
    static salts = 10
    
    static async encrypt(password) {
        return bcrypt.hash(password, PasswordUtil.salts)
    }

    static async compare({ rawPassword, encryptedPassword }) {
        return bcrypt.compare(rawPassword, encryptedPassword)
    }
}

export default PasswordUtil