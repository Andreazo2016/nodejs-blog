import multer from 'fastify-multer';
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tmpFolderPath = path.join(__dirname, '..', '..', 'tmp')

const existsTmpFolder = fs.existsSync(tmpFolderPath)

if(!existsTmpFolder) {
    fs.mkdirSync(tmpFolderPath)
}
const storageConfig = multer.diskStorage({
    destination: async (req, file, cb) => {
        cb(null, tmpFolderPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const multerConfig = multer({ storage: storageConfig })

