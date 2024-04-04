import ApiError from "./api-error"
import HttpStatus from 'http-status-codes'

class UnexpectedError extends ApiError {
    constructor(errorsMessage) {
        super(errorsMessage.join(' '))
        this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR
        this.errorsMessage = errorsMessage
    }
}

export default UnexpectedError