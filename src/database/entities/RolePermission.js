import { EntitySchema } from 'typeorm'

const RolePermissionEntity = new EntitySchema({
    name: 'Role_Permission',
    tableName: 'role_permission',
    columns: {
        id: {
            primary: true,
            type: 'integer',
            generated: true
        },
        role_id: {
            type: 'integer',
            generated: true
        },
        permission_id: {
            type: 'integer',
            generated: true
        },
        created_at: {
            type: "datetime",
            default: new Date()
        }
    }
})

export default RolePermissionEntity