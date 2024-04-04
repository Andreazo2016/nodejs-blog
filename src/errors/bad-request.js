import HttpStatus from 'http-status-codes'
import ApiError from "./api-error.js"

class BadRequestError extends ApiError {
    constructor(message) {
        super(message)
        this.statusCode = HttpStatus.BAD_REQUEST
        this.error = message
    }
}

export default BadRequestError