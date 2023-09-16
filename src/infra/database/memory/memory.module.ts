import { Module } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { MemoryClientRepository } from './repositories/memory-client.repository';
import { MemoryUserRepository } from './repositories/memory-user.repository';
import { MemoryMessageRepository } from './repositories/memory-message.repository';

@Module({
  providers: [
    {
      provide: ClientRepository,
      useClass: MemoryClientRepository,
    },
    {
      provide: UserRepository,
      useClass: MemoryUserRepository,
    },
    {
      provide: MessageRepository,
      useClass: MemoryMessageRepository,
    },
  ],
  exports: [UserRepository, ClientRepository, MessageRepository],
})
export class MemoryModuleDatabase {}
