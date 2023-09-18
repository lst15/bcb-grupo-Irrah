import { Controller, Body, Post } from '@nestjs/common';
import { CreatePlanUseCase } from 'src/domain/usecases/plan/create-plan.usecase';

@Controller('plan')
export class CreatePlanController {
  constructor(private createPlanUseCase: CreatePlanUseCase) {}

  @Post()
  async handle(@Body() body: any) {
    const executed = await this.createPlanUseCase.execute(body);
    return {
      success: true,
      message: executed,
    };
  }
}
