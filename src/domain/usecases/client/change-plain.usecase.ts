import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

interface ChangePlanUseCaseRequest {
  user_id: number;
  plan_type: string;
}

@Injectable()
export class ChangePlanUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    user_id,
    plan_type,
  }: ChangePlanUseCaseRequest): Promise<void | object> {
    const user = await this.clientRepository.getClient(user_id);

    if (!user) {
      throw new NotFoundException();
    }

    return await this.clientRepository.changePlan(user_id, plan_type);
  }
}
