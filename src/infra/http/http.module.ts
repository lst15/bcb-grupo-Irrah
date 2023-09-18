import { Module } from '@nestjs/common';
import { CreateUserController } from './controllers/user/create-user.controller';
import { CreateUserUseCase } from 'src/domain/usecases/user/create-user.usecase';
import { IncludeCreditsController } from './controllers/client/include-credits.controller';
import { IncludeCreditsUseCase } from 'src/domain/usecases/client/include-credits.usecase';
import { GetClientController } from './controllers/client/get-client.controller';
import { GetClientUseCase } from 'src/domain/usecases/client/get-client.usecase';
import { ChangeplanController } from './controllers/client/change-plan.controller';
import { ChangeLimitUseCase } from 'src/domain/usecases/client/change-limit.usecase';
import { ChangeLimitController } from './controllers/client/change-limit.controller';
import { ChangePlanUseCase } from 'src/domain/usecases/client/change-plain.usecase';
import { PrismaModuleDatabase } from '../database/prisma/prisma.module';
import { MockimplModule } from '../notification/mockimpl/Mockimpl.module';
import { SendMessageUseCase } from 'src/domain/usecases/message/send-message.usecase';
import { CreatePlatformController } from './controllers/platform/create-platform.repository';
import { CreatePlatformUseCase } from 'src/domain/usecases/platform/create-platform.usecase';
import { SendMessageHasPlatformControler } from './controllers/message-has-platform/send-message-has-platform.controller';
import { SendMessageHasPlatformUseCase } from 'src/domain/usecases/message-has-platform/send-message-has-platform.repository';

@Module({
  imports: [PrismaModuleDatabase, MockimplModule],
  controllers: [
    CreateUserController,
    IncludeCreditsController,
    GetClientController,
    ChangeplanController,
    ChangeLimitController,
    CreatePlatformController,
    SendMessageHasPlatformControler,
  ],
  providers: [
    CreateUserUseCase,
    IncludeCreditsUseCase,
    GetClientUseCase,
    ChangePlanUseCase,
    ChangeLimitUseCase,
    SendMessageUseCase,
    CreatePlatformUseCase,
    SendMessageHasPlatformUseCase,
  ],
})
export class HttpModule {}
