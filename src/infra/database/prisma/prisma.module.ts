import { Module } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaService } from './PrismaService';
import { PrismaClientRepository } from './repositories/prisma-client.repository';
import { PrismaMessageRepository } from './repositories/prisma-message.repository';
import { PrismaUserRepository } from './repositories/prisma-user.repository';
import { PlatformRepository } from 'src/domain/repositories/platform.repository';
import { PrismaPlatformRepository } from './repositories/prisma-platform.repository';
import { MessageHasPatformRepository } from 'src/domain/repositories/message-has-platform.repository';
import { PrismaMessageHasPlatformRepository } from './repositories/prisma-message-has-platform.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
    {
      provide: MessageRepository,
      useClass: PrismaMessageRepository,
    },
    {
      provide: PlatformRepository,
      useClass: PrismaPlatformRepository,
    },
    {
      provide: MessageHasPatformRepository,
      useClass: PrismaMessageHasPlatformRepository,
    },
  ],
  exports: [
    PlatformRepository,
    UserRepository,
    ClientRepository,
    MessageRepository,
    MessageHasPatformRepository,
  ],
})
export class PrismaModuleDatabase {}
