import { Test, TestingModule } from '@nestjs/testing';
import { MemoryModuleDatabase } from 'src/infra/database/memory/memory.module';
import { ChangeLimitController } from './change-limit.controller';
import { ChangeLimitUseCase } from 'src/domain/usecases/client/change-limit.usecase';
import { NotFoundException } from '@nestjs/common';

describe('Create User', () => {
  let appController: ChangeLimitController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MemoryModuleDatabase],
      controllers: [ChangeLimitController],
      providers: [ChangeLimitUseCase],
    }).compile();

    appController = app.get<ChangeLimitController>(ChangeLimitController);
  });

  it('It should be able to change client limit', async () => {
    const body = {
      user_uuid: 'd0fa50b5-d4ec-4f36-9dae-29d4f964100f',
      limit: 10,
    };

    expect(await appController.handle(body)).toMatchObject({ success: true });
  });

  it('It should not be able to change client limit because user not exists', async () => {
    const body = {
      user_uuid: '14905ac7-6ca4-4512-8e3f-cb599e11aa45',
      limit: 10,
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(NotFoundException);
  });
});
