import { Controller, Put, Body } from '@nestjs/common';
import { ChangePlanUseCase } from 'src/domain/usecases/client/change-plain.usecase';
import { ChangePlanDto } from '../../dtos/client/change-plan.dto';

@Controller('clients')
export class ChangeplanController {
  constructor(private planChangeUseCase: ChangePlanUseCase) {}

  @Put('plan')
  async handle(@Body() body: ChangePlanDto) {
    await this.planChangeUseCase.execute(body);

    return {
      success: true,
    };
  }
}
