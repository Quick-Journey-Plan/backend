import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiApiController } from './openai-api/openai-api.controller';

@Module({
  imports: [],
  controllers: [AppController, OpenaiApiController],
  providers: [AppService],
})
export class AppModule {}
