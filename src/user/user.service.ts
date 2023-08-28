import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/auth/schema/user.schema';

@Injectable()
export class UserService {
  jwtService: any;
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(
    name: any,
    email: any,
    password: any,
  ): Promise<User> {


    const user = await this.userModel.create({
      name,
      email,
      password,
    });
    return user;
  }

  async findOne(
    email: any
  ){
const user = await this.userModel.findOne({
   email 
})
return user;
  }
}
