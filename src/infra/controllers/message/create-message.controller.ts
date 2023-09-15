import { Controller, Post, Body } from '@nestjs/common';
import { MessageModel } from 'src/domain/models/message.model';
import { CreateMessageUseCase } from 'src/domain/usecases/message/create-message.usecase';

@Controller('message')
export class CreateMessageController {
  constructor(private createMessageUseCase: CreateMessageUseCase) {}

  @Post()
  async handle(@Body() message: MessageModel) {
    return this.createMessageUseCase.execute(message);
  }
}
