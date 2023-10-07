import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiApiModule } from './openai-api/openai-api.module';


@Module({
  imports: [OpenaiApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
