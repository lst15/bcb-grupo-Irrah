import { NotificationRepository } from 'src/domain/repositories/notification.repository';
import { MockimplService } from '../MockimplService';

import { Injectable } from '@nestjs/common/decorators';
@Injectable()
export class MockimplNotification implements NotificationRepository {
  constructor(private mockService: MockimplService) {}

  async sendWhatsMessage(
    phoneNumber: string,
    message: string,
  ): Promise<boolean> {
    return await this.mockService.sendSMS(phoneNumber, message);
  }
}
