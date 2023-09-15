import { Injectable } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}

  async create(entity: ClientModel): Promise<ClientModel> {
    return await this.prisma.client.create({
      data: { ...entity },
    });
  }
}
