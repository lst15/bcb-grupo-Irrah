import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { PrismaService } from '../PrismaService';
import { Client } from '@prisma/client';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}

  async changeCurrentConsume(
    user_uuid: string,
    consume: number,
  ): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        current_consume: consume,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async changeLimit(user_uuid: string, limit: number): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        allow_consume: limit,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async changePlan(user_uuid: string, plan: string): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        plan_type: plan,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async changeCredits(user_uuid: string, credits: number): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        credits: credits,
      },
      where: {
        User_user_uuid: user_uuid,
      },
    });
  }

  async getClient(user_uuid: string): Promise<Client> | null {
    return await this.prisma.client.findFirst({
      where: {
        User: {
          user_uuid: user_uuid,
        },
      },
    });
  }

  async create(entity: ClientModel): Promise<ClientModel> {
    return await this.prisma.client.create({
      data: { ...entity },
    });
  }
}
