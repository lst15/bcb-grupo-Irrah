import { MessageModel } from 'src/domain/models/message.model';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { NotificationRepository } from 'src/domain/repositories/notification.repository';

interface SendMessageUseCaseRequest extends MessageModel {}

@Injectable()
export class SendMessageUseCase {
  constructor(
    private messageRepository: MessageRepository,
    private clientRepository: ClientRepository,
    private notificationRepository: NotificationRepository,
  ) {}

  async execute(request: SendMessageUseCaseRequest) {
    const { User_user_uuid, message_to, message_text } = request;

    const client: any = await this.clientRepository.getClient(User_user_uuid);

    if (!client) {
      throw new NotFoundException();
    }

    if (client.plan_type == 'pre-pago') {
      if (client.credits < 0.25) {
        throw new BadRequestException('You reach your limit');
      }

      await this.clientRepository.changeCredits(
        User_user_uuid,
        client.credits - 0.25,
      );
    } else if (client.plan_type == 'pos-pago') {
      if (client.current_consume >= client.allow_consume) {
        throw new BadRequestException('You reach your limit.');
      }
      await this.clientRepository.changeCurrentConsume(
        User_user_uuid,
        client.current_consume + 0.25,
      );
    } else {
      throw new BadRequestException('plan not exists');
    }

    await this.notificationRepository.sendWhatsMessage(
      message_to,
      message_text,
    );
    return await this.messageRepository.create(request);
  }
}
