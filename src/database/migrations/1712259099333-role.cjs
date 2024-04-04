const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class Role1712259099333 {
    name = 'Role1712259099333'

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'role',
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
                    name:'slug',
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name:'description',
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
        await queryRunner.dropTable("role")
    }
}
