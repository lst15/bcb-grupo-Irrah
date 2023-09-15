import { UserModel } from '../models/user.model';
import { BaseRepository } from './base.repository';

export abstract class UserRepository extends BaseRepository<UserModel> {}
