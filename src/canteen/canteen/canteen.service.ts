import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from 'src/schema/book.schema';
import { Canteen } from 'src/schema/canteen.schema';
import { CreateCanteenDto } from '../dto/create.dto';
import { UpdateCanteenDto } from '../dto/update.dto';

@Injectable()
export class CanteenService {
  deleteById(id: string): Canteen | PromiseLike<Canteen> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Canteen.name)
    private canteenModel: mongoose.Model<Canteen>,
  ) {}

  async findAll(): Promise<Canteen[]> {
    const canteen = await this.canteenModel.find();
    return canteen;
  }

  async create(canteen: CreateCanteenDto): Promise<Canteen> {
    const res = await this.canteenModel.create(canteen);
    return res;
  }

  async findById(id: string): Promise<Canteen> {
    const canteen = await this.canteenModel.findById(id);
    return canteen;
  }

  async updateById(id: string, canteen: UpdateCanteenDto): Promise<Canteen> {
    return await this.canteenModel.findByIdAndUpdate(id, canteen, {
      new: true,
      runValidators: true,
    });
  }

  async deleteId(id: string): Promise<Canteen> {
    return await this.canteenModel.findByIdAndDelete(id);
  }
}
