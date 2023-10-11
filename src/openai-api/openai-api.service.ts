import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';

@Injectable()
export class OpenaiApiService {
  create(createOpenaiApiDto: CreateOpenaiApiDto) {
    return 'This action adds a new openaiApi';
  }

  findAll() {
    return `This action returns all openaiApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} openaiApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} openaiApi`;
  }
}
