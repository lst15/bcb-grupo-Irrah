import { Controller, Post, Body } from '@nestjs/common';
// import { UserModel } from 'src/domain/models/user.model';
import { CreateUserUseCase } from 'src/domain/usecases/user/create-user.usecase';
import { CreateUserDto } from '../../dtos/users/create-user.dto';
import { UserModel } from 'src/domain/models/user.model';

@Controller('users')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async handle(@Body() user: CreateUserDto) {
    const executed: object | UserModel = await this.createUserUseCase.execute({
      ...user,
      Plan_plan_id: user.plan_id,
    });

    return {
      success: true,
      user: executed,
    };
  }
}
