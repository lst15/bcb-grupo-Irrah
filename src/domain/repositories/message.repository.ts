import { MessageModel } from '../models/message.model';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common/decorators';
@Injectable()
export abstract class MessageRepository extends BaseRepository<MessageModel> {}
