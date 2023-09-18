import { IsNotEmpty } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty()
  text: string;
  @IsNotEmpty()
  user_uuid: string;
  @IsNotEmpty()
  phone?: string;
}
