import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Examination } from 'src/schema/examination.schema';
import { CreateExamDto } from './dto/createexam.dto';
import { UpdateExamDto } from './dto/updateexam.dto';

@Injectable()
export class ExaminationService {
  deleteById(id: string): Examination | PromiseLike<Examination> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Examination.name)
    private examinationModel: mongoose.Model<Examination>,
  ) {}

  async findAll(): Promise<Examination[]> {
    const examination = await this.examinationModel.find();
    return examination;
  }

  async create(examination: CreateExamDto): Promise<Examination> {
    const res = await this.examinationModel.create(examination);
    return res;
  }

  async findById(id: string): Promise<Examination> {
    const examination = await this.examinationModel.findById(id);
    return examination;
  }

  async updateById(
    id: string,
    examination: UpdateExamDto,
  ): Promise<Examination> {
    return await this.examinationModel.findByIdAndUpdate(id, examination, {
      new: true,
      runValidators: true,
    });
  }

  async deleteId(id: string): Promise<Examination> {
    return await this.examinationModel.findByIdAndDelete(id);
  }
}
