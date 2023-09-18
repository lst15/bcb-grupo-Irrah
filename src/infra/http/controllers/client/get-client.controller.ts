import { Controller, Get, Param } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { GetClientUseCase } from 'src/domain/usecases/client/get-client.usecase';

@Controller('clients')
export class GetClientController {
  constructor(private getClientUseCase: GetClientUseCase) {}

  @Get(':user_id')
  async handle(
    @Param('user_uuid') user_uuid: string,
  ): Promise<object | UserModel> {
    return await this.getClientUseCase.execute({ user_uuid });
  }
}
