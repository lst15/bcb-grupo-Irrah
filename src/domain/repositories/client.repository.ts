import { ClientModel } from '../models/client.model';
import { PlanModel } from '../models/plan.model';
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
    plan_id: number,
  ): Promise<void> | object;
  abstract getClient(
    user_uuid: string,
  ): null | Promise<ClientModel & { plan_relationship: PlanModel }>;
  abstract changeCredits(
    user_uuid: string,
    client_credits: number,
  ): Promise<void> | object;
  abstract changeCurrentConsume(
    user_uuid: string,
    client_consume: number,
  ): Promise<void> | object;
}
