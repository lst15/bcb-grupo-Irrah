import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';

interface IncludeCreditsUseCaseRequest {
  user_id: number;
  credits: number;
}

@Injectable()
export class IncludeCreditsUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    user_id,
    credits,
  }: IncludeCreditsUseCaseRequest): Promise<void | object> {
    const client = (await this.clientRepository.getClient(
      user_id,
    )) as ClientModel | null;

    if (!client) {
      throw new NotFoundException();
    }

    return await this.clientRepository.changeCredits(
      user_id,
      client.credits + credits,
    );
  }
}
