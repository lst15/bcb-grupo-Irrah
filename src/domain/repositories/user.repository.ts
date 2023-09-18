import { UserModel } from '../models/user.model';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class UserRepository extends BaseRepository<UserModel> {
  abstract findUser(
    user_cpf?: string,
    user_phone?: string,
    user_email?: string,
    user_cnpj?: string,
  ): Promise<UserModel | null> | object;
}
