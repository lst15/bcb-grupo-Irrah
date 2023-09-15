import { Injectable } from '@nestjs/common';
import { MessageModel } from 'src/domain/models/Message.model';
import { MessageRepository } from 'src/domain/repositories/message.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaMessageRepository implements MessageRepository {
  constructor(private prisma: PrismaService) {}

  async create(entity: MessageModel): Promise<MessageModel> {
    return await this.prisma.message.create({
      data: { ...entity },
    });
  }
}
