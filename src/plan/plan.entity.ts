import { City } from "src/city/city.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('plans')
export class Plan {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "text" })
    public plan: string;

    @ManyToOne(() => City, (city) => city)
    @JoinColumn({ name: 'city_id' })
    public city: City;

    @Column({ type: "timestamp" })
    public createdAt: number;
}