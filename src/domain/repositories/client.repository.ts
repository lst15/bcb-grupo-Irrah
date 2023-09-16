import { ClientModel } from '../models/client.model';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export abstract class ClientRepository extends BaseRepository<ClientModel> {
  abstract changeLimit(user_id: number, limit: number): Promise<any> | object;
  abstract changeplan(
    user_id: number,
    plan_type: string,
  ): Promise<any> | object;
  abstract getClient(user_id: number): Promise<ClientModel | null> | object;
  abstract changeCredits(
    user_id: number,
    credits: number,
  ): Promise<any> | object;
  abstract changeCurrentConsume(
    user_id: number,
    consume: number,
  ): Promise<any> | object;
}
