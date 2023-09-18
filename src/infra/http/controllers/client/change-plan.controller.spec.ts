import { Test, TestingModule } from '@nestjs/testing';
import { MemoryModuleDatabase } from 'src/infra/database/memory/memory.module';
import { NotFoundException } from '@nestjs/common';
import { ChangeplanController } from './change-plan.controller';
import { ChangePlanUseCase } from 'src/domain/usecases/client/change-plain.usecase';

describe('Create User', () => {
  let appController: ChangeplanController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MemoryModuleDatabase],
      controllers: [ChangeplanController],
      providers: [ChangePlanUseCase],
    }).compile();

    appController = app.get<ChangeplanController>(ChangeplanController);
  });

  it('It should be able to change client plan', async () => {
    const body = {
      user_uuid: 'b1c3af5f-7273-4a4a-b6d0-be9c210ac887',
      plan_type: 'pre-pago',
    };

    expect(await appController.handle(body)).toMatchObject({ success: true });
  });

  it('It should not be able to change client plan because user not exists', async () => {
    const body = {
      user_uuid: '14905ac7-6ca4-4512-8e3f-cb599e11aa45',
      plan_type: 'pre-pago',
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(NotFoundException);
  });
});
