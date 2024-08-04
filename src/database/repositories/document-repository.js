import database from '../index.js'
import DocumentProcessing from '../entities/DocumentProcessing.js'

const documentRepository = database.getRepository(DocumentProcessing)

export default documentRepository
