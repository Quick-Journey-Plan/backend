import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';

@Injectable()
export class OpenaiApiService {

  getCityInfo(createOpenaiApiDto: CreateOpenaiApiDto) {
    // @TODO: first check the city in DB

    // @TODO: get datas from OpenAI API
    return 'This action adds a new openaiApi';
  }

}
