import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { ClientRepository } from 'src/domain/repositories/client.repository';

interface IncludeCreditsUseCaseRequest {
  User_user_uuid: string;
  credits: number;
}

@Injectable()
export class IncludeCreditsUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    User_user_uuid,
    credits,
  }: IncludeCreditsUseCaseRequest): Promise<void | object> {
    const client = (await this.clientRepository.getClient(
      User_user_uuid,
    )) as ClientModel | null;

    if (!client) {
      throw new NotFoundException();
    }

    return await this.clientRepository.changeCredits(
      User_user_uuid,
      client.credits + credits,
    );
  }
}
