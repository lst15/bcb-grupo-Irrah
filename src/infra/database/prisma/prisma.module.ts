import { Module } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaService } from './PrismaService';
import { PrismaClientRepository } from './repositories/prisma-client.repository';
import { PrismaMessageRepository } from './repositories/prisma-message.repository';
import { PrismaUserRepository } from './repositories/prisma-user.repository';

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
  ],
  exports: [UserRepository, ClientRepository, MessageRepository],
})
export class PrismaModuleDatabase {}
