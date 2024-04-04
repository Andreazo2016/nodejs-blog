const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class User1712173667743 {
    name = 'User1712173667743'

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name:'id',
                    isGenerated: true,
                    isPrimary: true,
                    type: "integer",
                    isNullable: false,
                    generationStrategy:"increment"
                },
                {
                    name:'name',
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name:'email',
                    type: "varchar",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name:'password',
                    type: "varchar"
                },
                {
                    name:'created_at',
                    type: "timestamp",
                    default: "now()",
                    isNullable: false,
                },
                {
                    name:'updated_at',
                    type: "timestamp",
                    isNullable: true,
                }
            ]
        }))
    }

    async down(queryRunner) {
        await queryRunner.dropTable("user")
    }
}
