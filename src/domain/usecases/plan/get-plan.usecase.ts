import { Injectable, NotFoundException } from '@nestjs/common';
import { PlanRepository } from 'src/domain/repositories/plan.repository';

interface GetPlanUseCaseRequest {
  plan_id: number;
}

@Injectable()
export class GetPlanUseCase {
  constructor(private planRepository: PlanRepository) {}

  async execute({ plan_id }: GetPlanUseCaseRequest) {
    const plan = await this.planRepository.findPlan(plan_id, '');

    if (!plan) {
      throw new NotFoundException();
    }

    return plan;
  }
}
