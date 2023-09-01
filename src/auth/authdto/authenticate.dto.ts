import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '../authinterface/user.interface';

export class AuthenticateDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  role: Role;
}
