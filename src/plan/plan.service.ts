import { Injectable } from '@nestjs/common';
import { City } from 'src/city/city.entity';
import { Plan } from './plan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlanService {
    constructor(@InjectRepository(Plan) private readonly planRepository: Repository<Plan>) { }

    public async savePlan(city: City, plan: string): Promise<Plan> {
        const planObj = this.planRepository.create({city, plan});

        return await this.planRepository.save(planObj);
    }
}
