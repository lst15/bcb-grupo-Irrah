import { Injectable } from '@nestjs/common';
import { PlanModel } from 'src/domain/models/plan.model';
import { PlanRepository } from 'src/domain/repositories/plan.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaPlanRepository implements PlanRepository {
  constructor(private prismaService: PrismaService) {}

  async create(entity: PlanModel): Promise<object | PlanModel> {
    return await this.prismaService.plan.create({
      data: { ...entity },
    });
  }
}
