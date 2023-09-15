import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/User.model';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(entity: UserModel): Promise<UserModel> {
    return await this.prisma.user.create({
      data: { ...entity },
    });
  }
}
