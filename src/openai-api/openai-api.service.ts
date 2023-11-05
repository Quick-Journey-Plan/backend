import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import OpenAI from 'openai';

@Injectable()
export class OpenaiApiService {

  public async getCityInfo(createOpenaiApiDto: CreateOpenaiApiDto): Promise<string> {
    // @TODO: first check the city in DB

    return '';
  }

  private async getCityInfoFromAI(city: string): Promise<string> {

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `give me 1 day plan in ${city}` }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices[0].message);

    return 'demo';
  }
}
