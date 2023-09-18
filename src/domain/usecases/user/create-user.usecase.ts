import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';

interface CreateUserUseCaseRequest extends UserModel {}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    request: CreateUserUseCaseRequest,
  ): Promise<object | UserModel> {
    const user = await this.userRepository.findUser(
      request.user_cpf,
      request.user_phone,
      request.user_email,
      request.user_company_cnpj,
    );

    if (user) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: 'user already exists.',
      });
    }

    return await this.userRepository.create(request);
  }
}
