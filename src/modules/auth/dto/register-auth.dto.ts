import { IsString, IsNotEmpty } from 'class-validator';
import { LoginDto } from './login-auth.dto';

export class RegisterDto extends LoginDto {
  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
}