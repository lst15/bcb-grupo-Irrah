import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { PrismaService } from '../PrismaService';
import { PlanModel } from 'src/domain/models/plan.model';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(entity: ClientModel): object | Promise<ClientModel> {
    throw new Error('Method not implemented.');
  }

  async changeCurrentConsume(
    user_uuid: string,
    client_consume: number,
  ): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        client_current_consume: client_consume,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async changeLimit(user_uuid: string, limit: number): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        client_allow_consume: limit,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async changePlan(user_uuid: string, plan_id: number): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        Plan_plan_id: plan_id,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async changeCredits(
    user_uuid: string,
    client_credits: number,
  ): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        client_credits: client_credits,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async getClient(
    user_uuid: string,
  ): null | Promise<ClientModel & { plan_relationship: PlanModel }> {
    return await this.prisma.client.findFirst({
      where: {
        user_relationship: {
          user_uuid: user_uuid,
        },
      },
      include: { plan_relationship: true },
    });
  }
}
