const { MigrationInterface, QueryRunner, TableForeignKey } = require("typeorm");

module.exports = class AddUserRoleId1712259296206 {
    name = 'AddUserRoleId1712259296206'
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE user add COLUMN role_id integer`)
        //await queryRunner.query(`ALTER TABLE user ADD CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role(id)`)
        await queryRunner.createForeignKey(
            "user",
            new TableForeignKey({
                name:"fk_role_id",
                columnNames: ["role_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "role",
                onDelete: "CASCADE",
            }),
        )
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE user DROP CONSTRAINT fk_role_id`)
        await queryRunner.query(`ALTER TABLE user DROP COLUMN role_id`)
    }
}
