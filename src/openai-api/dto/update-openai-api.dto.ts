import { PartialType } from '@nestjs/mapped-types';
import { CreateOpenaiApiDto } from './create-openai-api.dto';

export class UpdateOpenaiApiDto extends PartialType(CreateOpenaiApiDto) {}
