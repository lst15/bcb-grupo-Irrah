import { ClientModel } from '../models/client.model';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export abstract class ClientRepository extends BaseRepository<ClientModel> {
  abstract changeLimit(
    user_uuid: string,
    limit: number,
  ): Promise<void> | object;
  abstract changePlan(
    user_uuid: string,
    plan_type: string,
  ): Promise<void> | object;
  abstract getClient(user_uuid: string): Promise<ClientModel | null> | object;
  abstract changeCredits(
    user_uuid: string,
    credits: number,
  ): Promise<void> | object;
  abstract changeCurrentConsume(
    user_uuid: string,
    consume: number,
  ): Promise<void> | object;
}
