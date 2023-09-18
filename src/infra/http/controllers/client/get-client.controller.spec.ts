import { Test, TestingModule } from '@nestjs/testing';
import { MemoryModuleDatabase } from 'src/infra/database/memory/memory.module';
import { GetClientController } from './get-client.controller';
import { GetClientUseCase } from 'src/domain/usecases/client/get-client.usecase';
import { NotFoundException } from '@nestjs/common';

describe('Create User', () => {
  let appController: GetClientController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MemoryModuleDatabase],
      controllers: [GetClientController],
      providers: [GetClientUseCase],
    }).compile();

    appController = app.get<GetClientController>(GetClientController);
  });

  it('It should be able to find a client', async () => {
    const user_uuid = 'b1c3af5f-7273-4a4a-b6d0-be9c210ac887';
    expect(await appController.handle(user_uuid)).toHaveProperty('credits');
  });

  it('It should not be able to find a client because user not exists', async () => {
    const user_uuid = '8d47d713-eefb-4c46-afc4-44b6b8f415af';

    await expect(async () => {
      await appController.handle(user_uuid);
    }).rejects.toThrow(NotFoundException);
  });
});
