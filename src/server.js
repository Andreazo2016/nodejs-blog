import app from './app.js'
import logger from '@utils/logger.js'
const port = 3000
await app.listen({ port }, async (error) => {
    if (error) {
        logger.error(error)
        process.exit(1)
    }
    logger.info(`Server is runing at port ${port}.`)
})