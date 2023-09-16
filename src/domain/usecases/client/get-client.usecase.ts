import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

interface GetClienteUseCaseRequest {
  user_id: number;
}

@Injectable()
export class GetClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({ user_id }: GetClienteUseCaseRequest) {
    const user = await this.clientRepository.getClient(user_id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
