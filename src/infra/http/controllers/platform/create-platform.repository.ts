import { Controller, Post, Body } from '@nestjs/common';
// import { UserModel } from 'src/domain/models/user.model';
import { UserModel } from 'src/domain/models/user.model';
import { CreatePlatformUseCase } from 'src/domain/usecases/platform/create-platform.usecase';
import { CreatePlatformDto } from '../../dtos/platform/create-platform.dto';

@Controller('platforms')
export class CreatePlatformController {
  constructor(private createPlatformUseCase: CreatePlatformUseCase) {}

  @Post()
  async handle(@Body() platform: CreatePlatformDto) {
    const executed: object | UserModel =
      await this.createPlatformUseCase.execute({
        platform_name: platform.platform_name,
        platform_cost: platform.platform_cost,
      });

    return {
      success: true,
      user: executed,
    };
  }
}
