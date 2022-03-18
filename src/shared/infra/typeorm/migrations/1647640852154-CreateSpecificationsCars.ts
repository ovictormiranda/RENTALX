import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecificationsCars1647640852154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "specifications_cars",
          columns: [
            {
              name: "car_id",
              type: "uuid",
            },
            {
              name: "specification_id",
              type: "uuid",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            }
          ]
        })
      );

      await queryRunner.createForeignKey(
        "specifications_cars",
        new TableForeignKey({
          name: "FKSpecificationCar",
          referencedTableName: "specifications",
          referencedColumnNames: ["id"],
          columnNames: ["specification_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL",
        })
      );

      await queryRunner.createForeignKey(
        "specifications_cars",
        new TableForeignKey({
          name: "FKCarSpecification",
          referencedTableName: "cars",
          referencedColumnNames: ["id"],
          columnNames: ["car_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL",
        })
      );
    }

    //Processo inverso, então primeiro dropamos as foreignkeys, para depois dropar a tabela
    //reverse process, so first of all we had to drop any foreignkeys starting
    //from bottom to top and only after drop each foreignkey following a desc order
    //so we could to drop a table.
    public async down(queryRunner: QueryRunner): Promise<void> {
      //drop second(last) foreignkey
      await queryRunner.dropForeignKey(
        "specifications_cars",
        "FKCarSpecification"
      );

      //drop first foreignkey
      await queryRunner.dropForeignKey(
        "specifications_cars",
        "FKSpecificationCar"
      );

      //drop table
      await queryRunner.dropTable("specifications_cars");
    }
}

