import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';

interface GetClienteUseCaseRequest {
  user_uuid: string;
}

@Injectable()
export class GetClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    user_uuid,
  }: GetClienteUseCaseRequest): Promise<object | UserModel> {
    const user = await this.clientRepository.getClient(user_uuid);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
