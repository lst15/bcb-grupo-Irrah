import { Controller, Post, Body } from '@nestjs/common';
import { UserModel } from 'src/domain/models/user.model';
import { CreateUserUseCase } from 'src/domain/usecases/user/create-user.usecase';

@Controller('user')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async handle(@Body() user: UserModel) {
    return this.createUserUseCase.execute(user);
  }
}
