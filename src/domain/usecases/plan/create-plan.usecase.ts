import { UserModel } from 'src/domain/models/user.model';
import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { PlanModel } from 'src/domain/models/plan.model';
import { PlanRepository } from 'src/domain/repositories/plan.repository';

interface CreatePlanUseCaseRequest extends PlanModel {}

@Injectable()
export class CreatePlanUseCase {
  constructor(private planRepository: PlanRepository) {}

  async execute(
    request: CreatePlanUseCaseRequest,
  ): Promise<object | UserModel> {
    const plan = await this.planRepository.findPlan(0, request.plan_name);

    if (plan) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: 'plan already exists.',
      });
    }

    return await this.planRepository.create({
      plan_name: request.plan_name,
    });
  }
}
