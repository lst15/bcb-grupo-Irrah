import { Module } from '@nestjs/common';
import { MockimplService } from './MockimplService';
import { NotificationRepository } from 'src/domain/repositories/notification.repository';
import { MockimplNotification } from './repositories/Mockimpl-notification.repository';

@Module({
  providers: [
    MockimplService,
    {
      provide: NotificationRepository,
      useClass: MockimplNotification,
    },
  ],
  exports: [NotificationRepository],
})
export class MockimplModule {}
