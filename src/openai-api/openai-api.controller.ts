import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenaiApiService } from './openai-api.service';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import { UpdateOpenaiApiDto } from './dto/update-openai-api.dto';

@Controller('openai-api')
export class OpenaiApiController {
  constructor(private readonly openaiApiService: OpenaiApiService) {}

  @Post()
  create(@Body() createOpenaiApiDto: CreateOpenaiApiDto) {
    return this.openaiApiService.create(createOpenaiApiDto);
  }

  @Get()
  findAll() {
    return this.openaiApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openaiApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpenaiApiDto: UpdateOpenaiApiDto) {
    return this.openaiApiService.update(+id, updateOpenaiApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openaiApiService.remove(+id);
  }
}
