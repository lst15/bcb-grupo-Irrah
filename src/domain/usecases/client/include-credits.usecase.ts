import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';

interface IncludeCreditsUseCaseRequest {
  user_id: number;
  credits: number;
}

@Injectable()
export class IncludeCreditsUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({ user_id, credits }: IncludeCreditsUseCaseRequest) {
    const client: any = await this.clientRepository.getClient(user_id);

    if (!client) {
      throw new NotFoundException();
    }

    return await this.clientRepository.changeCredits(
      user_id,
      client.credits + credits,
    );
  }
}
