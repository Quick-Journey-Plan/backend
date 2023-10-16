import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import OpenAI from 'openai';


@Injectable()
export class OpenaiApiService {

  public async getCityInfo(createOpenaiApiDto: CreateOpenaiApiDto): Promise<string> {
    // @TODO: first check the city in DB

    // @TODO: get datas from OpenAI API
    const openai = new OpenAI({
      apiKey: 'my api key', // defaults to process.env["OPENAI_API_KEY"]
    });

    return await 'This action adds a new openaiApi';
  }

}
