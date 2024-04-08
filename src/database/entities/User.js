import { EntitySchema } from 'typeorm'

const UserEntity = new EntitySchema({
    name: 'User',
    tableName: 'user',
    columns: {
        id: {
            primary: true,
            type: 'integer',
            generated: true
        },
        name: {
            type: 'varchar',
            nullable: false
        },
        email: {
            type: 'varchar',
            nullable: false,
            unique: true
        },
        password: {
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
    },
    relations: {
        role: {
            target: "Role",
            type: "one-to-one",
            joinTable: true,
            cascade: true
        }
    }
})

export default UserEntity