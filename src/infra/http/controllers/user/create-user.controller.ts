import { Controller, Post, Body } from '@nestjs/common';
// import { UserModel } from 'src/domain/models/user.model';
import { CreateUserUseCase } from 'src/domain/usecases/user/create-user.usecase';
import { CreateUserDto } from '../../dtos/users/create-user.dto';

@Controller('users')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async handle(@Body() user: CreateUserDto) {
    const executed = await this.createUserUseCase.execute(user);

    return {
      success: true,
      user: executed,
    };
  }
}
