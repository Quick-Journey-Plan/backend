import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import OpenAI from 'openai';

@Injectable()
export class OpenaiApiService {

  public async getCityInfo(createOpenaiApiDto: CreateOpenaiApiDto): Promise<OpenAI.Chat.Completions.ChatCompletion.Choice[]> {
    // @TODO: first check the city in DB

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `give me 3 days plan in ${createOpenaiApiDto.city}` }],
      model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices;
  }
}
