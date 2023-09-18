import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { SendMessageDto } from '../../dtos/message/send-message.dto';
import { SendMessageUseCase } from 'src/domain/usecases/message/send-message.usecase';

@Controller('message')
export class SendMessageController {
  constructor(private sendMessageUseCase: SendMessageUseCase) {}

  @Post('send')
  async handle(@Body() body: SendMessageDto) {
    await this.sendMessageUseCase.execute({
      is_whatsapp: body.is_whatsapp,
      phone: body.phone,
      user_id: body.user_id,
      text: body.text,
    });

    return {
      success: true,
    };
  }
}
