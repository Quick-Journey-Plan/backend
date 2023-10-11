import { Controller, Post, Body } from '@nestjs/common';
import { OpenaiApiService } from './openai-api.service';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';

@Controller('openai-api')
export class OpenaiApiController {
  constructor(private readonly openaiApiService: OpenaiApiService) { }

  @Post()
  getCityInfo(@Body() createOpenaiApiDto: CreateOpenaiApiDto) {
    return this.openaiApiService.getCityInfo(createOpenaiApiDto);
  }

}
