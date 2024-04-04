import { EntitySchema } from 'typeorm'

const PermissionEntity = new EntitySchema({
    name: 'Permission',
    tableName: 'permission',
    columns: {
        id: {
            primary: true,
            type: 'integer',
            generated: true
        },
        name: {
            type: "varchar",
            nullable: false
        },
        slug: {
            type: "varchar",
            nullable: false
        },
        description: {
            type: "varchar",
            nullable: false
        },
        created_at: {
            type: "datetime",
            default: new Date()
        },
        updated_at: {
            type: "datetime"
        }
    },
})

export default PermissionEntity