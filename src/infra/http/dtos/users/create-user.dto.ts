import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';
// import { CreateClientDto } from '../client/create-client.dto';

export class CreateUserDto {
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail({})
  email: string;

  @IsPhoneNumber('BR')
  phone: string;

  @MaxLength(100)
  @IsNotEmpty({ message: 'invalid name' })
  company_name: string;

  @MinLength(11)
  @MaxLength(11)
  cpf: string;

  @MinLength(14)
  @MaxLength(14)
  company_cnpj: string;
}
