import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class MemoryUserRepository extends UserRepository {
  private database: UserModel[] = [
    {
      name: 'John Doe',
      cpf: '12345678900',
      email: 'johndoe@example.com',
      company_name: 'Importalibs',
      company_cnpj: '1848884848848/0000',
      phone: '+551199856231',
    },
    {
      name: 'Meg Doe',
      cpf: '12345178900',
      email: 'megdoe@example.com',
      company_name: 'ibi restaurantes',
      company_cnpj: '1234567812121/0000',
      phone: '+551199855231',
    },
    {
      name: 'Lucius Doe',
      cpf: '98765432100',
      email: 'luciusdoe@example.com',
      company_name: 'ibi churrascos',
      company_cnpj: '1204060812121/0000',
      phone: '+551299866312',
    },
  ];

  findUser(
    cpf?: string,
    phone?: string,
    email?: string,
    cnpj?: string,
  ): Promise<UserModel> | object {
    const user = this.database.find(
      (user) =>
        user.cpf === cpf ||
        user.phone === phone ||
        user.email === email ||
        user.company_cnpj == cnpj,
    );

    return user;
  }

  create(entity: UserModel): object | Promise<UserModel> {
    this.database.push({ ...entity });
    return entity;
  }
}
