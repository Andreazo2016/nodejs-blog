import { EntitySchema } from 'typeorm'

const DocumentProcessingEntity = new EntitySchema({
    name: 'DocumentProcessing',
    tableName: 'document_processing',
    columns: {
        id: {
            primary: true,
            type: 'integer',
            generated: true
        },
        title: {
            type: 'varchar',
            nullable: false
        },
        status: {
            type: 'varchar',
            nullable: false,
            length: 50
        },
        file_path: {
            type: 'varchar',
            nullable: false
        },
        created_at: {
            type: 'date',
            default: new Date()
        },
        updated_at: {
            type: 'date'
        }
    }
})

export default DocumentProcessingEntity