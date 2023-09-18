import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { MessageHasPlatformModel } from '../models/message-has-platform.models';

@Injectable()
export abstract class MessageHasPatformRepository extends BaseRepository<MessageHasPlatformModel> {}
