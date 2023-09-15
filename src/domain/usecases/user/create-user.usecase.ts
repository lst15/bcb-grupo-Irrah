import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';

interface CreateUsereUseCaseRequest extends UserModel {}

@Injectable()
export class CreateUserUseCase {
  constructor(private clientRepository: UserRepository) {}

  async execute(request: CreateUsereUseCaseRequest) {
    return await this.clientRepository.create(request);
  }
}
