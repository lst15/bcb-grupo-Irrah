import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';
// import { CreateClientDto } from '../client/create-client.dto';

export class CreateUserDto {
  @MaxLength(100)
  @IsNotEmpty()
  user_name: string;

  @IsNotEmpty()
  @IsEmail({})
  user_email: string;

  @IsPhoneNumber('BR')
  user_phone: string;

  @MaxLength(100)
  @IsNotEmpty({ message: 'invalid name' })
  user_company_name: string;

  @MinLength(11)
  @MaxLength(11)
  user_cpf: string;

  @MinLength(14)
  @MaxLength(14)
  user_company_cnpj: string;

  @IsNumber()
  plan_id: number;
}
