import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PlanModel } from '../models/plan.model';

@Injectable()
export abstract class PlanRepository extends BaseRepository<PlanModel> {
  abstract findPlan(
    plan_id?: number,
    plan_name?: string,
  ): Promise<PlanModel | null>;
}
