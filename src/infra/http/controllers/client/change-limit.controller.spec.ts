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
      user_id: 0,
      limit: 10,
    };

    expect(await appController.handle(body)).toMatchObject({ success: true });
  });

  it('It should not be able to change client limit because user not exists', async () => {
    const body = {
      user_id: 100,
      limit: 10,
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(NotFoundException);
  });
});
