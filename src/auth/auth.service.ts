import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

// import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from './authdto/authenticate.dto';
import { IAuthenticate, Role } from '../auth/authinterface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { JwtSecretRequestType, JwtService } from '@nestjs/jwt';
import { User } from './schema/user.schema';
import { ProfileDto } from './authdto/profile.dto';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async signUp(authenticateDto: AuthenticateDto) {
    console.log(authenticateDto, 'signup');

    const { name, email, password, role } = authenticateDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userService.create(
      name,
      email,
      hashedPassword,
      role,
    );
    console.log(user);
    // const token = this.jwtService.sign({ id: user._id });
    // return { token };
  }

  async login(ProfileDto: ProfileDto) {
    const { email, password } = ProfileDto;
    const user = await this.userService.findOne(email);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      userId: user._id,
      userName: user.name,
      role: user.role,
    };
    console.log(payload);
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
