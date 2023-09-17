import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';

interface ChangeLimitUseCaseRequest {
  user_id: number;
  limit: number;
}

@Injectable()
export class ChangeLimitUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    user_id,
    limit,
  }: ChangeLimitUseCaseRequest): Promise<void | object> {
    const user = await this.clientRepository.getClient(user_id);

    if (!user) {
      throw new NotFoundException();
    }

    return await this.clientRepository.changeLimit(user_id, limit);
  }
}
