import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';

interface CreateUserUseCaseRequest extends UserModel {}

@Injectable()
export class CreateUserUseCase {
  constructor(private clientRepository: UserRepository) {}

  async execute(request: CreateUserUseCaseRequest) {
    const user = await this.clientRepository.findUser(
      request.cpf,
      request.phone,
      request.email,
      request.company_cnpj,
    );

    if (user) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: 'user already exists.',
      });
    }

    return await this.clientRepository.create(request);
  }
}
