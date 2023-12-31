import { Injectable } from '@nestjs/common';
import { PlanModel } from 'src/domain/models/plan.model';
import { PlanRepository } from 'src/domain/repositories/plan.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaPlanRepository implements PlanRepository {
  constructor(private prismaService: PrismaService) {}

  async findPlan(plan_id?: number, plan_name?: string): Promise<PlanModel> {
    return await this.prismaService.plan.findFirst({
      where: {
        OR: [
          {
            plan_id: plan_id,
          },
          {
            plan_name: plan_name,
          },
        ],
      },
    });
  }

  async create(entity: PlanModel): Promise<object | PlanModel> {
    return await this.prismaService.plan.create({
      data: { ...entity },
    });
  }
}
