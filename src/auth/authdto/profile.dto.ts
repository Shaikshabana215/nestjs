import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Role } from '../authinterface/user.interface';

export class ProfileDto{
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly role: Role;
}