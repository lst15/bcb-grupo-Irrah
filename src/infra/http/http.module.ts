import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateUserController } from './controllers/user/create-user.controller';
import { CreateClientController } from './controllers/client/create-client.controller';
import { CreateMessageController } from './controllers/message/create-message.controller';
import { CreateUserUseCase } from 'src/domain/usecases/user/create-user.usecase';
import { CreateClientUseCase } from 'src/domain/usecases/client/create-client.usecase';
import { CreateMessageUseCase } from 'src/domain/usecases/message/create-message.usecase';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateUserController,
    CreateClientController,
    CreateMessageController,
  ],
  providers: [CreateUserUseCase, CreateMessageUseCase, CreateClientUseCase],
})
export class HttpModule {}
