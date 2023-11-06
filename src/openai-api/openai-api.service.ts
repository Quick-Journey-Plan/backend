import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import OpenAI from 'openai';
import { CityService } from 'src/city/city.service';

@Injectable()
export class OpenaiApiService {
  constructor(private readonly cityService: CityService) { }

  public async getCityInfo(createOpenaiApiDto: CreateOpenaiApiDto): Promise<string> {
    // @TODO: first check the city in DB
    const { city } = createOpenaiApiDto;

    const res = await this.cityService.saveCity({ title: city });
    console.log(res);

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
