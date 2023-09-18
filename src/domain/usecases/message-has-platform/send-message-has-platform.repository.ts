import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MessageHasPatformRepository } from 'src/domain/repositories/message-has-platform.repository';
import { MessageHasPlatformModel } from 'src/domain/models/message-has-platform.models';
import { PlatformRepository } from 'src/domain/repositories/platform.repository';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { ClientModel } from 'src/domain/models/client.model';
import { NotificationRepository } from 'src/domain/repositories/notification.repository';

interface SendMessageHasPlatformUseCaseRequest
  extends MessageHasPlatformModel {}

@Injectable()
export class SendMessageHasPlatformUseCase {
  constructor(
    private messageHasRepository: MessageHasPatformRepository,
    private platformRepository: PlatformRepository,
    private clientRepository: ClientRepository,
    private notificationRepository: NotificationRepository,
  ) {}

  async execute(
    request: SendMessageHasPlatformUseCaseRequest,
  ): Promise<object | MessageHasPlatformModel> {
    const { User_user_uuid, message_to, message_text, Platform_platform_id } =
      request;

    const client = (await this.clientRepository.getClient(
      User_user_uuid,
    )) as ClientModel;
    const platform =
      await this.platformRepository.findPlatform(Platform_platform_id);

    if (!client || !platform) {
      throw new NotFoundException();
    }

    if (client.plan_type == 'pre-pago') {
      if (client.credits < 0.25) {
        throw new BadRequestException('You reach your limit');
      }

      await this.clientRepository.changeCredits(
        User_user_uuid,
        client.credits - platform.platform_cost,
      );
    } else if (client.plan_type == 'pos-pago') {
      if (client.current_consume >= client.allow_consume) {
        throw new BadRequestException('You reach your limit.');
      }
      await this.clientRepository.changeCurrentConsume(
        User_user_uuid,
        client.current_consume + platform.platform_cost,
      );
    } else {
      throw new BadRequestException('plan not exists');
    }

    await this.notificationRepository.sendWhatsMessage(
      message_to,
      message_text,
    );

    return await this.messageHasRepository.create(request);
  }
}
