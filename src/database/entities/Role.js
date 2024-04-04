import { EntitySchema } from 'typeorm'

const RoleEntity = new EntitySchema({
    name: 'Role',
    tableName: 'role',
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
        },
    },
    relations: {
        permissions: {
            target: "Permission",
            type: "one-to-many",
            joinTable: true,
            cascade: true,
            lazy: true
        }
    }
})

export default RoleEntity