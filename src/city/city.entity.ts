import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class City {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "varchar" })
    public title: string;

    @Column({ type: "varchar", nullable: true })
    public description: string;

    @Column({ type: "timestamp" })
    public createdAt: number;
}