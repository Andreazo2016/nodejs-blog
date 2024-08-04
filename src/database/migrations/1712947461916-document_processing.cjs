const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class DocumentProcessing1712947461916 {
    name = 'DocumentProcessing1712947461916'

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'document_processing',
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
                    name:'title',
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name:'status',
                    type: "varchar",
                    length: 50,
                    isNullable: false,
                },
                {
                    name:'file_path',
                    type: "varchar",
                    isNullable: false,
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
        await queryRunner.dropTable(`document_processing`);
    }
}
