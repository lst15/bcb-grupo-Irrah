import { Body, Controller, Post } from '@nestjs/common';
import { SendMessageHasPlatformUseCase } from 'src/domain/usecases/message-has-platform/send-message-has-platform.repository';
import { CreateMessageHasPlatformDto } from '../../dtos/message-has-platform/create-message-has-platform.dto';

@Controller('messages')
export class SendMessageHasPlatformControler {
  constructor(
    private sendMessageHasPlatformControllerUseCase: SendMessageHasPlatformUseCase,
  ) {}

  @Post('send')
  handle(@Body() body: CreateMessageHasPlatformDto) {
    return this.sendMessageHasPlatformControllerUseCase.execute({
      message_text: body.message_text,
      message_to: body.message_to,
      Platform_platform_id: body.platform_id,
      User_user_uuid: body.user_uuid,
    });
  }
}
