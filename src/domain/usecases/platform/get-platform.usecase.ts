import { Injectable, NotFoundException } from '@nestjs/common';
import { PlatformRepository } from 'src/domain/repositories/platform.repository';

interface GetPlatformUseCaseRequest {
  plan_id: number;
}

@Injectable()
export class GetPlatformUseCase {
  constructor(private planRepository: PlatformRepository) {}

  async execute({ plan_id }: GetPlatformUseCaseRequest) {
    const plan = await this.planRepository.findPlatform(plan_id, '');

    if (!plan) {
      throw new NotFoundException();
    }

    return plan;
  }
}
