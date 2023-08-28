import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import {sign} from 'jsonwebtoken';
import { AuthenticateDto } from './authdto/authenticate.dto';
import {IAuthenticate, Role} from '../auth/authinterface/user.interface'
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt'
import { Model } from 'mongoose';
import { JwtSecretRequestType, JwtService } from '@nestjs/jwt';
import { User } from './schema/user.schema';
import { ProfileDto } from './authdto/profile.dto';
@Injectable()
export class AuthService {
    userService: any;
    constructor (
        
        private jwtService: JwtService
    ){}
    
    async signUp(AuthenticateDto: AuthenticateDto): Promise<{ token:string }>{
        const { name, email, password} = AuthenticateDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userService.create(
            name,
            email,
            hashedPassword
        )
        const token = this.jwtService.sign({id: user._id})
        return { token }
    }

   async login(ProfileDto: ProfileDto): Promise<{token: string}>{
    const { email, password } = ProfileDto;
    const user = await this.userService.findOne(email)
if(!user){
    throw new UnauthorizedException('Invalid email or password')
}

const isPasswordMatched = await bcrypt.compare(password, user.password)
if(!isPasswordMatched){
    throw new UnauthorizedException('Invalid email or password');
}
const token = this.jwtService.sign({id: user._id})
        return { token }

   }
    


}
