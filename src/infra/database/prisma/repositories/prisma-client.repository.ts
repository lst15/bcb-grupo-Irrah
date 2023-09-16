import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { PrismaService } from '../PrismaService';
import { Client } from '@prisma/client';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}

  async changeCurrentConsume(user_id: number, consume: number): Promise<any> {
    return await this.prisma.client.updateMany({
      data: {
        current_consume: consume,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async changeLimit(user_id: number, limit: number) {
    return await this.prisma.client.updateMany({
      data: {
        allow_consume: limit,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async changeplan(user_id: number, plan: string) {
    return await this.prisma.client.updateMany({
      data: {
        plan_type: plan,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async changeCredits(user_id: number, credits: number): Promise<any> {
    return await this.prisma.client.updateMany({
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
