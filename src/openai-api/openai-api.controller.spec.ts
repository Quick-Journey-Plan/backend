import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiApiController } from './openai-api.controller';

describe('OpenaiApiController', () => {
  let controller: OpenaiApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenaiApiController],
    }).compile();

    controller = module.get<OpenaiApiController>(OpenaiApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
