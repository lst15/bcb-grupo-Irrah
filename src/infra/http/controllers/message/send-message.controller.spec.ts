import { Test, TestingModule } from '@nestjs/testing';
import { MemoryModuleDatabase } from 'src/infra/database/memory/memory.module';
import { SendMessageController } from './send-message.controller';
import { SendMessageUseCase } from 'src/domain/usecases/message/SendMessageUseCase';
import { MessageModel } from 'src/domain/models/message.model';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('Create User', () => {
  let appController: SendMessageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MemoryModuleDatabase],
      controllers: [SendMessageController],
      providers: [SendMessageUseCase],
    }).compile();

    appController = app.get<SendMessageController>(SendMessageController);
  });

  it('It should be able to send message using balance', async () => {
    const body: MessageModel = {
      user_id: 0,
      is_whatsapp: false,
      text: 'opa',
    };

    expect(await appController.handle(body)).toMatchObject({ success: true });
  });

  it('It should be able to send message using consume', async () => {
    const body: MessageModel = {
      user_id: 2,
      is_whatsapp: false,
      text: 'opa',
    };

    expect(await appController.handle(body)).toMatchObject({ success: true });
  });

  it('It should not be able to send message because doesnt have balance', async () => {
    const body: MessageModel = {
      user_id: 1,
      is_whatsapp: false,
      text: 'opa',
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(BadRequestException);
  });

  it('It should not be able to send message because doesnt have limit', async () => {
    const body: MessageModel = {
      user_id: 3,
      is_whatsapp: false,
      text: 'opa',
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(BadRequestException);
  });

  it('It should not be able to send message because user not exists', async () => {
    const body: MessageModel = {
      user_id: 100,
      is_whatsapp: false,
      text: 'opa',
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(NotFoundException);
  });

  it('It should not be able to send message because plan not exists', async () => {
    const body: MessageModel = {
      user_id: 4,
      is_whatsapp: false,
      text: 'opa',
    };

    await expect(async () => {
      await appController.handle(body);
    }).rejects.toThrow(BadRequestException);
  });
});
