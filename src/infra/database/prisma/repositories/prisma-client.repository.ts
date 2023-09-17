import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { PrismaService } from '../PrismaService';
import { Client } from '@prisma/client';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}

  async changeCurrentConsume(user_id: number, consume: number): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        current_consume: consume,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async changeLimit(user_id: number, limit: number): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        allow_consume: limit,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async changePlan(user_id: number, plan: string): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        plan_type: plan,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async changeCredits(user_id: number, credits: number): Promise<void> {
    await this.prisma.client.updateMany({
      data: {
        credits: credits,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async getClient(user_id: number): Promise<Client> {
    return await this.prisma.client.findFirst({
      where: {
        User: {
          user_id: user_id,
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
