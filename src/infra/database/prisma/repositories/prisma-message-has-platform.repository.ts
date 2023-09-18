import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { MessageHasPatformRepository } from 'src/domain/repositories/message-has-platform.repository';
import { MessageHasPlatformModel } from 'src/domain/models/message-has-platform.models';

@Injectable()
export class PrismaMessageHasPlatformRepository
  implements MessageHasPatformRepository
{
  constructor(private prisma: PrismaService) {}

  async create(
    entity: MessageHasPlatformModel,
  ): Promise<object | MessageHasPlatformModel> {
    return await this.prisma.message.create({
      data: {
        message_text: entity.message_text,
        message_to: entity.message_to,
        User_user_uuid: entity.User_user_uuid,
        Message_Has_Platform: {
          create: {
            Platform_platform_id: entity.Platform_platform_id,
          },
        },
      },
    });
  }
}
