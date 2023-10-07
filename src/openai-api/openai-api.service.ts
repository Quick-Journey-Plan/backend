import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import { UpdateOpenaiApiDto } from './dto/update-openai-api.dto';

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

  update(id: number, updateOpenaiApiDto: UpdateOpenaiApiDto) {
    return `This action updates a #${id} openaiApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} openaiApi`;
  }
}
