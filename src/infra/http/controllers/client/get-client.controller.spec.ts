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
    const user_id = 0;
    expect(await appController.handle(user_id)).toHaveProperty('credits');
  });

  it('It should not be able to find a client because isnt a number', async () => {
    const user_id = '0a';

    await expect(async () => {
      await appController.handle(user_id as unknown as number);
    }).rejects.toThrow(NotFoundException);
  });

  it('It should not be able to find a client because user not exists', async () => {
    const user_id = 100;

    await expect(async () => {
      await appController.handle(user_id as unknown as number);
    }).rejects.toThrow(NotFoundException);
  });
});
