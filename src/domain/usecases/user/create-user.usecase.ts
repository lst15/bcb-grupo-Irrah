import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository';

interface CreateUsereUseCaseRequest extends UserModel {}

export class CreateUserUseCase {
  constructor(private clientRepository: UserRepository) {}

  async execute(request: CreateUsereUseCaseRequest) {
    return await this.clientRepository.create(request);
  }
}
