import fastify from '../app.js'
export class JwtUtil {
    static encode(payload) {
        return fastify.jwt.sign(payload)
    }

    static decode(token) {
        return fastify.jwt.decode(token)
    }
    
}