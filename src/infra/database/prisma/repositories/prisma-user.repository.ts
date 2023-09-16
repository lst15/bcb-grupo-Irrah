import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/User.model';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async findUser(
    cpf?: string,
    phone?: string,
    email?: string,
    cnpj?: string,
  ): Promise<UserModel> {
    return await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            cpf: cpf,
          },
          {
            phone: phone,
          },
          {
            email: email,
          },
          {
            company_cnpj: cnpj,
          },
        ],
      },
    });
  }

  async create(entity: UserModel): Promise<any> {
    return await this.prisma.user.create({
      data: {
        name: entity.name,
        company_cnpj: entity.company_cnpj,
        company_name: entity.company_name,
        cpf: entity.cpf,
        email: entity.email,
        phone: entity.phone,
        Client: {
          create: {
            allow_consume: 0,
            current_consume: 0,
            credits: 0,
            plan_type: 'pre-pago',
          },
        },
      },
    });
  }
}
