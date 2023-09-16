import { Controller, Put, Body } from '@nestjs/common';
import { ChangeLimitUseCase } from 'src/domain/usecases/client/change-limit.usecase';
import { ChangeLimitDto } from '../../dtos/client/change-limit.dto';

@Controller('clients')
export class ChangeLimitController {
  constructor(private changeLimitUseCase: ChangeLimitUseCase) {}

  @Put('limit')
  async handle(@Body() body: ChangeLimitDto) {
    await this.changeLimitUseCase.execute(body);
    return {
      success: true,
    };
  }
}
