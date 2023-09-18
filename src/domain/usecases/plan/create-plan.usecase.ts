import { UserModel } from 'src/domain/models/user.model';
import { Injectable } from '@nestjs/common';
import { PlanModel } from 'src/domain/models/plan.model';
import { PlanRepository } from 'src/domain/repositories/plan.repository';

interface CreatePlanUseCaseRequest extends PlanModel {}

@Injectable()
export class CreatePlanUseCase {
  constructor(private planRepository: PlanRepository) {}

  async execute(
    request: CreatePlanUseCaseRequest,
  ): Promise<object | UserModel> {
    return await this.planRepository.create({
      plan_name: request.plan_name,
    });
  }
}
