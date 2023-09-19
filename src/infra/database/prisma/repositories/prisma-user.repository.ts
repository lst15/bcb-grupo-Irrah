import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async findUser(
    user_cpf?: string,
    user_phone?: string,
    user_email?: string,
    user_cnpj?: string,
  ): Promise<UserModel> {
    return await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            user_cpf: user_cpf,
          },
          {
            user_phone: user_phone,
          },
          {
            user_email: user_email,
          },
          {
            user_company_cnpj: user_cnpj,
          },
        ],
      },
    });
  }

  async create(entity: UserModel): Promise<any> {
    return await this.prisma.user.create({
      data: {
        user_name: entity.user_name,
        user_company_cnpj: entity.user_company_cnpj,
        user_company_name: entity.user_company_name,
        user_cpf: entity.user_cpf,
        user_email: entity.user_email,
        user_phone: entity.user_phone,
        client_relationship: {
          create: {
            client_allow_consume: 0,
            client_current_consume: 0,
            client_credits: 0,
            Plan_plan_id: entity.Plan_plan_id,
          },
        },
      },
    });
  }
}
