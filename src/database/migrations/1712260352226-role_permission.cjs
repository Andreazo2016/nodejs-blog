const { MigrationInterface, QueryRunner, Table, TableForeignKey } = require("typeorm");

module.exports = class RolePermission1712260352226 {
    name = 'RolePermission1712260352226'

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'role_permission',
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
                    name:'role_id',
                    type: "integer",
                    isNullable: false,
                },
                {
                    name:'permission_id',
                    type: "integer",
                    isNullable: false,
                },
                {
                    name:'created_at',
                    type: "timestamp",
                    default: "now()",
                    isNullable: false,
                }
            ]
        }))

        await queryRunner.createForeignKey(
            "role_permission",
            new TableForeignKey({
                name:'FK_permission_role',
                columnNames: ["role_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "role",
                onDelete: "CASCADE",
            }),
        )

        await queryRunner.createForeignKey(
            "role_permission",
            new TableForeignKey({
                name:'FK_role_permission',
                columnNames: ["permission_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "permission",
                onDelete: "CASCADE",
            }),
        )
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE role_permission DROP CONSTRAINT FK_permission_role`)
        await queryRunner.query(`ALTER TABLE role_permission DROP CONSTRAINT FK_role_permission`)
        await queryRunner.dropTable("role_permission")
    }
}
