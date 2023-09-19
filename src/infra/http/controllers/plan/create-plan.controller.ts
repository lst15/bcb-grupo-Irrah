import { Controller, Body, Post } from '@nestjs/common';
import { CreatePlanUseCase } from 'src/domain/usecases/plan/create-plan.usecase';
import { CreatePlanDto } from '../../dtos/plan/create-plan.dto';

@Controller('plans')
export class CreatePlanController {
  constructor(private createPlanUseCase: CreatePlanUseCase) {}

  @Post()
  async handle(@Body() plan: CreatePlanDto) {
    console.log(plan);
    const executed = await this.createPlanUseCase.execute(plan);
    return {
      success: true,
      message: executed,
    };
  }
}
