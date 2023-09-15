import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/PrismaService';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { PrismaClientRepository } from './prisma/repositories/prisma-client.repository';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import { PrismaMessageRepository } from './prisma/repositories/prisma-message.repository';

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
})
export class DatabaseModule {}
