import {MigrationInterface, QueryRunner} from "typeorm";

export class User1583419078457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE IF EXISTS 'users';
        CREATE TABLE IF NOT EXISTS 'users' (
          'id' int(11) NOT NULL AUTO_INCREMENT,
          'name' varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
          'email' varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
          'password' varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
          'isActive' tinyint(1) NOT NULL,
          'created_at' timestamp NOT NULL,
          'updated_at' timestamp NOT NULL,
          PRIMARY KEY ('id')
        );`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE users`);
    }

}
