import documentRepository from "@database/repositories/document-repository.js"
class DocumentService {
    async save({ title, status = 'pending', file_path }) {
        return documentRepository.save({
            title, file_path, status, created_at: new Date()
        })
    }

    findAll() {
       return documentRepository.find({})
    }
}

export default DocumentService
