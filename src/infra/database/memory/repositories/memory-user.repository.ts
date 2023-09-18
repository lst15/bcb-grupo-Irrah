import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class MemoryUserRepository extends UserRepository {
  private database: UserModel[] = [
    {
      user_uuid: 'd0fa50b5-d4ec-4f36-9dae-29d4f964100f',
      user_name: 'John Doe',
      user_cpf: '12345678900',
      user_email: 'johndoe@example.com',
      user_company_name: 'Importalibs',
      user_company_cnpj: '1848884848848/0000',
      user_phone: '+551199856231',
    },
    {
      user_uuid: 'e5e79e4c-1280-49eb-bec2-6f2cf05f7a36',
      user_name: 'Meg Doe',
      user_cpf: '12345178900',
      user_email: 'megdoe@example.com',
      user_company_name: 'ibi restaurantes',
      user_company_cnpj: '1234567812121/0000',
      user_phone: '+551199855231',
    },
    {
      user_uuid: 'b1c3af5f-7273-4a4a-b6d0-be9c210ac887',
      user_name: 'Lucius Doe',
      user_cpf: '98765432100',
      user_email: 'luciusdoe@example.com',
      user_company_name: 'ibi churrascos',
      user_company_cnpj: '1204060812121/0000',
      user_phone: '+551299866312',
    },
  ];

  findUser(
    user_cpf?: string,
    user_phone?: string,
    user_email?: string,
    user_cnpj?: string,
  ): Promise<UserModel> | object {
    const user = this.database.find(
      (user) =>
        user.user_cpf === user_cpf ||
        user.user_phone === user_phone ||
        user.user_email === user_email ||
        user.user_company_cnpj == user_cnpj,
    );

    return user;
  }

  create(entity: UserModel): object | Promise<UserModel> {
    this.database.push({ ...entity });
    return entity;
  }
}
