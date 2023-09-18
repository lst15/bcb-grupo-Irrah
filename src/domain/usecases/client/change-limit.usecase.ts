import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';

interface ChangeLimitUseCaseRequest {
  user_uuid: string;
  limit: number;
}

@Injectable()
export class ChangeLimitUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    user_uuid,
    limit,
  }: ChangeLimitUseCaseRequest): Promise<void | object> {
    const user = await this.clientRepository.getClient(user_uuid);

    if (!user) {
      throw new NotFoundException();
    }

    return await this.clientRepository.changeLimit(user_uuid, limit);
  }
}
