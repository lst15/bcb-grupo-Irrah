import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { GetClientUseCase } from 'src/domain/usecases/client/get-client.usecase';

@Controller('clients')
export class GetClientController {
  constructor(private getClientUseCase: GetClientUseCase) {}

  @Get(':user_id')
  async handle(@Param('user_id') user_id: number): Promise<object | UserModel> {
    if (isNaN(user_id)) {
      throw new NotFoundException();
    }

    return await this.getClientUseCase.execute({ user_id });
  }
}
