import generateAliasesResolver from 'esm-module-alias'; 
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const resolve = generateAliasesResolver({
    '@errors': path.join(__dirname, '..', 'errors'),
    '@configs': path.join(__dirname, '..', 'configs'),
    '@controllers': path.join(__dirname, '..', 'controllers'),
    '@routes': path.join(__dirname, '..', 'routes'),
    '@services': path.join(__dirname, '..', 'services'),
    '@database': path.join(__dirname, '..', 'database'),
    '@utils': path.join(__dirname, '..', 'utils'),
})