import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../authinterface/user.interface';

export class ProfileDto {
  readonly id: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  readonly role: Role;
}
