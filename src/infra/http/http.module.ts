import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateUserController } from './controllers/user/create-user.controller';
import { CreateClientController } from './controllers/client/create-client.controller';
import { CreateMessageController } from './controllers/message/create-message.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateUserController,
    CreateClientController,
    CreateMessageController,
  ],
})
export class HttpModule {}
