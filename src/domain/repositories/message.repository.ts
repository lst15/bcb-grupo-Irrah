import { MessageModel } from '../models/message.model';
import { BaseRepository } from './base.repository';

export abstract class MessageRepository extends BaseRepository<MessageModel> {}
