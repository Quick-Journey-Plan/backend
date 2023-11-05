import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('cities')
export class City {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "varchar" })
    public title: string;

    @Column({ type: "varchar" })
    public description: string;

    @Column({ type: "timestamp" })
    public createdAt: number;
}