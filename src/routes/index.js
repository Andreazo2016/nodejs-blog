import userRoutes from "./user/user-routes.js"

const registerRoutes = (fastify) => {
    fastify.register(userRoutes, { prefix: '/api/v1' })
}

export default registerRoutes