import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import fs from 'fs'


function changeFileFromJsToCjs() {
    const migrations = path.join(__dirname, '..', 'database', 'migrations')
    const files = fs.readdirSync(migrations)
    for (const file of files) {
        const isJsFile = file.split('.')?.[1]
        const filename = file.split('.')?.[0]
        if (isJsFile === 'js') {
            const src = path.join(migrations, file)
            const dest = path.join(migrations, `${filename}.cjs`)
            fs.copyFileSync(src, dest)
            fs.unlinkSync(src)
        }
        
    }
}

const migrationName = process.env.npm_config_migration_name
if (migrationName) {
    //npm run migration:create --migration_name=user 
    const migrationPath = path.join(__dirname, '..', 'database', 'migrations', migrationName)
    const datasourcePath = path.join(__dirname, '..', 'database', 'index.js')
    const cmdCreateMigration = `npx typeorm migration:generate ${migrationPath} -d ${datasourcePath} -o`
    execSync(cmdCreateMigration)
    changeFileFromJsToCjs()
    console.log(`Migration: ${migrationName} created!!`)
}
