import { Controller } from '@nestjs/common';
import { SendMessageUseCase } from 'src/domain/usecases/message/send-message.usecase';
import { Body, Post } from '@nestjs/common/decorators';
import { SendMessageDto } from '../../dtos/message/send-message.dto';

@Controller('message')
export class SendMessageController {
  constructor(private sendMessageUseCase: SendMessageUseCase) {}

  @Post('send')
  async handle(@Body() body: SendMessageDto) {
    await this.sendMessageUseCase.execute(body);

    return {
      success: true,
    };
  }
}
