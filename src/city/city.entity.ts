import { Plan } from "src/plan/plan.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class City {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "varchar" })
    public title: string;

    @Column({ type: "varchar", nullable: true })
    public description: string;

    @CreateDateColumn({ type: "timestamp" })
    public createdAt: number;

    @OneToMany(() => Plan, (plan) => plan.city)
    public plans: Plan[];
}