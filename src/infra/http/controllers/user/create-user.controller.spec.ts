import { CreateUserController } from './create-user.controller';
import { CreateUserUseCase } from 'src/domain/usecases/user/create-user.usecase';
import { Test, TestingModule } from '@nestjs/testing';
import { MemoryModuleDatabase } from 'src/infra/database/memory/memory.module';
import { UserModel } from 'src/domain/models/user.model';
import { ConflictException } from '@nestjs/common';

describe('Create User', () => {
  let appController: CreateUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MemoryModuleDatabase],
      controllers: [CreateUserController],
      providers: [CreateUserUseCase],
    }).compile();

    appController = app.get<CreateUserController>(CreateUserController);
  });

  it('It should be able to create an user', async () => {
    const user: UserModel = {
      name: 'Talia Doe',
      cpf: '8876642210110',
      email: 'taliadoe@example.com',
      company_name: 'ibi churrascos',
      company_cnpj: '12058145142121/0000',
      phone: '+551299866311',
    };

    const result = await appController.handle(user);
    expect(result).toHaveProperty('user');
  });

  it('It should not be able to create an user because already exists', async () => {
    const user: UserModel = {
      name: 'Lucius Doe',
      cpf: '98765432100',
      email: 'luciusdoe@example.com',
      company_name: 'ibi churrascos',
      company_cnpj: '1204060812121/0000',
      phone: '+551299866312',
    };

    await expect(async () => {
      await appController.handle(user);
    }).rejects.toThrow(ConflictException);
  });
});
