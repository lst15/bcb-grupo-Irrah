import { ClientModel } from '../models/client.model';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export abstract class ClientRepository extends BaseRepository<ClientModel> {
  abstract changeLimit(user_id: number, limit: number): Promise<void> | object;
  abstract changePlan(
    user_id: number,
    plan_type: string,
  ): Promise<void> | object;
  abstract getClient(user_id: number): Promise<ClientModel | null> | object;
  abstract changeCredits(
    user_id: number,
    credits: number,
  ): Promise<void> | object;
  abstract changeCurrentConsume(
    user_id: number,
    consume: number,
  ): Promise<void> | object;
}
