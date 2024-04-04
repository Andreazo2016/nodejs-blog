class ApiError extends Error {
    constructor(message) {
        super(message)
        this.isApiError = true
    }

}

export default ApiError