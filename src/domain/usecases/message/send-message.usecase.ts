import { MessageModel } from 'src/domain/models/message.model';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { NotificationRepository } from 'src/domain/repositories/notification.repository';

interface SendMessageUseCaseRequest extends MessageModel {
  phone: string;
}

@Injectable()
export class SendMessageUseCase {
  constructor(
    private messageRepository: MessageRepository,
    private clientRepository: ClientRepository,
    private notificationRepository: NotificationRepository,
  ) {}

  async execute(request: SendMessageUseCaseRequest) {
    const { user_id, phone, text } = request;
    const client: any = await this.clientRepository.getClient(user_id);

    if (!client) {
      throw new NotFoundException();
    }

    if (client.plan_type == 'pre-pago') {
      if (client.credits < 0.25) {
        throw new BadRequestException('You reach your limit');
      }

      await this.clientRepository.changeCredits(user_id, client.credits - 0.25);
    } else if (client.plan_type == 'pos-pago') {
      if (client.current_consume >= client.allow_consume) {
        throw new BadRequestException('You reach your limit.');
      }
      await this.clientRepository.changeCurrentConsume(
        user_id,
        client.current_consume + 0.25,
      );
    } else {
      throw new BadRequestException('plan not exists');
    }

    await this.notificationRepository.sendWhatsMessage(phone, text);
    return await this.messageRepository.create(request);
  }
}
