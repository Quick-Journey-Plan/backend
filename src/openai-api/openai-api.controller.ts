import { Controller, Post, Body } from '@nestjs/common';
import { OpenaiApiService } from './openai-api.service';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import OpenAI from 'openai';

@Controller('openai-api')
export class OpenaiApiController {
  constructor(private readonly openaiApiService: OpenaiApiService) { }

  @Post()
  public async getCityInfo(@Body() createOpenaiApiDto: CreateOpenaiApiDto): Promise<OpenAI.Chat.Completions.ChatCompletion.Choice[]> {
    return await this.openaiApiService.getCityInfo(createOpenaiApiDto);
  }

}
