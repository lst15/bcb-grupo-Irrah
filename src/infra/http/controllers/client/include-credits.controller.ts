import { Controller, Put, Body } from '@nestjs/common';
import { IncludeCreditsUseCase } from 'src/domain/usecases/client/include-credits.usecase';
import { IncludeCreditsDto } from '../../dtos/client/include-credits.dto';

@Controller('clients')
export class IncludeCreditsController {
  constructor(private includeCreditsUseCase: IncludeCreditsUseCase) {}

  @Put('add_credits')
  async handle(@Body() body: IncludeCreditsDto) {
    const { user_uuid, credits } = body;
    await this.includeCreditsUseCase.execute({
      User_user_uuid: user_uuid,
      credits: credits,
    });
    return {
      success: true,
    };
  }
}
