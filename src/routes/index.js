import authRoutes from "./auth/auth-routes.js"
import userRoutes from "./user/user-routes.js"

const registerRoutes = (fastify) => {
    fastify.register(userRoutes, { prefix: '/api/v1' })
    fastify.register(authRoutes, { prefix: '/api/v1' })
}

export default registerRoutes