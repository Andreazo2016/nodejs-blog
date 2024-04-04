import { DataSource } from 'typeorm'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dataSource = new DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: false,
    logging: true,
    entities: [path.join(__dirname, "entities/*.js")],
    migrations: [path.join(__dirname, "migrations/*.cjs")],
    subscribers: []
})

export default dataSource