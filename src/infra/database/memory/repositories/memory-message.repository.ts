import { Injectable } from '@nestjs/common';
import { MessageModel } from 'src/domain/models/message.model';
import { MessageRepository } from 'src/domain/repositories/message.repository';

@Injectable()
export class MemoryMessageRepository extends MessageRepository {
  private database: MessageModel[] = [
    {
      message_text: 'Bom dia',
      User_user_uuid: '',
      message_to: '+5514997856541',
    },
  ];

  create(entity: MessageModel): object | Promise<MessageModel> {
    this.database.push({ ...entity });
    return entity;
  }
}
