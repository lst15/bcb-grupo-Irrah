import { Injectable } from '@nestjs/common';
import { MessageModel } from 'src/domain/models/message.model';
import { MessageRepository } from 'src/domain/repositories/message.repository';

@Injectable()
export class MemoryMessageRepository extends MessageRepository {
  private database: MessageModel[] = [
    {
      is_whatsapp: true,
      text: 'Bom dia',
      user_id: 0,
    },
  ];

  create(entity: MessageModel): object | Promise<MessageModel> {
    this.database.push({ ...entity });
    return entity;
  }
}
