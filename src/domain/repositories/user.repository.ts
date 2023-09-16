import { UserModel } from '../models/user.model';
import { BaseRepository } from './base.repository';

export abstract class UserRepository extends BaseRepository<UserModel> {
  abstract findUser(
    cpf?: string,
    phone?: string,
    email?: string,
    cnpj?: string,
  ): Promise<UserModel | null> | object;
}
