import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isActive: boolean;

    // @Column()
    // created_at: timestamp;

    // @Column()
    // updated_at: timestamp;

}
