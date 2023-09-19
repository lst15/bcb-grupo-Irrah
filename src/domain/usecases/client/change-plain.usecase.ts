import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

interface ChangePlanUseCaseRequest {
  user_uuid: string;
  plan_type: number;
}

@Injectable()
export class ChangePlanUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    user_uuid,
    plan_type,
  }: ChangePlanUseCaseRequest): Promise<void | object> {
    const user = await this.clientRepository.getClient(user_uuid);

    if (!user) {
      throw new NotFoundException();
    }

    return await this.clientRepository.changePlan(user_uuid, plan_type);
  }
}
