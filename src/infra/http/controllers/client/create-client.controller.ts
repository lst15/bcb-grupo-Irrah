import { Controller, Post, Body } from '@nestjs/common';
import { ClientModel } from 'src/domain/models/client.model';
import { CreateClientUseCase } from 'src/domain/usecases/client/create-client.usecase';

@Controller('client')
export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  @Post()
  async handle(@Body() client: ClientModel) {
    return this.createClientUseCase.execute(client);
  }
}
