import { Injectable } from '@nestjs/common/decorators';
@Injectable()
export abstract class NotificationRepository {
  abstract sendWhatsMessage(
    phoneNumber: string,
    message: string,
  ): Promise<boolean>;
}
