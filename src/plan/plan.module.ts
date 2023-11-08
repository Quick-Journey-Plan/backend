import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { Plan } from './plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  providers: [PlanService],
  exports: [PlanService]
})
export class PlanModule {}
