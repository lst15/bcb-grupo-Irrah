import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { PlatformRepository } from 'src/domain/repositories/platform.repository';
import { PlatformModel } from 'src/domain/models/platform.model';

interface CreatePlatformUseCaseRequest extends PlatformModel {}

@Injectable()
export class CreatePlatformUseCase {
  constructor(private platformRepository: PlatformRepository) {}

  async execute(
    request: CreatePlatformUseCaseRequest,
  ): Promise<object | PlatformModel> {
    const platform = await this.platformRepository.findPlatform(
      0,
      request.platform_name,
    );

    if (platform) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: 'platform already exists.',
      });
    }

    return await this.platformRepository.create(request);
  }
}
