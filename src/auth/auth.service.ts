import { Injectable, NotFoundException } from '@nestjs/common';
import {faker} from '@faker-js/faker';
import {sign} from 'jsonwebtoken';
import { AuthenticateDto } from './authdto/authenticate.dto';
import {IAuthenticate, Role} from '../auth/authinterface/user.interface'
@Injectable()
export class AuthService {
    users = [
        {
            id: faker.datatype.uuid(),
            userName: 'Terrence Ratke',
            password: 'terrance',
            role: Role.Admin,
        },
        {
            id: faker.datatype.uuid(),
            userName: 'Samanso',
            password: 'saman',
            role: Role.Customer,
        }, 
    ];

    authenticate(authenticateDto: AuthenticateDto): IAuthenticate{
        const user = this.users.find((u)=>
        u.userName === authenticateDto.userName && 
        u.password === authenticateDto.password,
        );
        if(!user) throw new NotFoundException('Invalid credentials');
        const token = sign({ ...user }, 'secrete');
        return { token , user };

        
    }
}
