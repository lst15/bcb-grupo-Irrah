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
import { PlanModel } from 'src/domain/models/plan.model';

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

    const client: null | (ClientModel & { plan_relationship: PlanModel }) =
      await this.clientRepository.getClient(User_user_uuid);

    const platform =
      await this.platformRepository.findPlatform(Platform_platform_id);

    if (!client || !platform) {
      throw new NotFoundException();
    }

    if (client.plan_relationship.plan_name == 'pre-pago') {
      if (client.client_credits < platform.platform_cost) {
        throw new BadRequestException('Have enough balance');
      }

      await this.clientRepository.changeCredits(
        User_user_uuid,
        client.client_credits - platform.platform_cost,
      );
    } else if (client.plan_relationship.plan_name == 'pos-pago') {
      if (client.client_current_consume >= client.client_allow_consume) {
        throw new BadRequestException('Have enough balance');
      }
      await this.clientRepository.changeCurrentConsume(
        User_user_uuid,
        client.client_current_consume + platform.platform_cost,
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
