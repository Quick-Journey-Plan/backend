import { Module } from '@nestjs/common';
import { OpenaiApiService } from './openai-api.service';
import { OpenaiApiController } from './openai-api.controller';
import { CityModule } from 'src/city/city.module';
import { PlanModule } from 'src/plan/plan.module';

@Module({
  controllers: [OpenaiApiController],
  providers: [OpenaiApiService],
  imports: [CityModule, PlanModule]
})
export class OpenaiApiModule { }
