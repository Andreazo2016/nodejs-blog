import BadRequestError from "@errors/bad-request.js"
const handleJoiValidation = (joiErrorValidation) => {
    const message = joiErrorValidation?.details?.map(detail => detail.message).join(' ')
    return new BadRequestError(message)
}

export default handleJoiValidation