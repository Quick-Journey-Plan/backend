import { Controller, Get } from '@nestjs/common';

@Controller('openai-api')
export class OpenaiApiController {
    @Get()
    findAll(): string {
        return "Test";
    }
}
