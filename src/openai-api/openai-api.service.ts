import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import OpenAI from 'openai';
import { CityService } from 'src/city/city.service';

@Injectable()
export class OpenaiApiService {
  constructor(private readonly cityService: CityService) { }

  /**
   * Get city information. If the information is not in the database,
   * it fetches it from an AI service and saves it to the database.
   * @param createOpenaiApiDto The DTO containing the city name.
   * @returns The city information.
   */
  public async getCityInfo(createOpenaiApiDto: CreateOpenaiApiDto): Promise<string> {
    const { city } = createOpenaiApiDto;

    // Check if city information exists in the database
    const cityFromDB = await this.cityService.getCityFromDB(city);

    if (!cityFromDB) {
      // If not in the database, fetch from AI service and save to the database
      return this.saveCityResultToDB(city);
    }

    return cityFromDB.title;
  }

  /**
   * Fetch city information from an AI (ChatGPT).
   * @param city The city name.
   * @returns The city information from the AI (ChatGPT).
   */
  private async fetchCityInfoFromAI(city: string): Promise<string> {

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `give me 1 day plan in ${city}` }],
      model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0].message.content;
  }

  /**
   * Save city information to the database.
   * @param city The city name.
   * @returns An empty string indicating success.
   */
  private async saveCityResultToDB(city: string): Promise<string> {
    // Fetch city plan from AI service
    const cityPlan = await this.fetchCityInfoFromAI(city);

    // Save city information to the database
    const res = await this.cityService.saveCity({ title: city });

    return cityPlan;
  }
}
