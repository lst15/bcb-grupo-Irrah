import { Test, TestingModule } from '@nestjs/testing';
import { MemoryModuleDatabase } from 'src/infra/database/memory/memory.module';
import { NotFoundException } from '@nestjs/common';
import { IncludeCreditsUseCase } from 'src/domain/usecases/client/include-credits.usecase';
import { IncludeCreditsController } from './include-credits.controller';

describe('Create User', () => {
  let appController: IncludeCreditsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MemoryModuleDatabase],
      controllers: [IncludeCreditsController],
      providers: [IncludeCreditsUseCase],
    }).compile();

    appController = app.get<IncludeCreditsController>(IncludeCreditsController);
  });

  it('It should be able to add more credits to an user', async () => {
    const body = {
      user_uuid: 'd0fa50b5-d4ec-4f36-9dae-29d4f964100f',
      credits: 10,
    };

    expect(await appController.handle(body)).toMatchObject({ success: true });
  });

  it('It should not be able add more credits to an user because user not exists', async () => {
    const body = {
      user_uuid: '8d47d713-eefb-4c46-afc4-44b6b8f415af',
      credits: 10,
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(NotFoundException);
  });
});
