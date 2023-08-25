import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { IStudent } from 'src/interface/student.interface';

@Injectable()
export class StudentService {
  //IStudent data is taken from student interface
  constructor(@InjectModel('Student') private StudentModel: Model<IStudent>) {}

  //creating a new student inside mongodb
  async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
    //create a newStudent record
    const newStudent = await new this.StudentModel(createStudentDto);
    //newStudent record is save in mongo
    return newStudent.save();
  }

  //reading all the students from mongo

  async getAllStudent(): Promise<IStudent[]> {
    const studentData = await this.StudentModel.find();
    if (!studentData || studentData.length == 0) {
      throw new NotFoundException('Student data not found');
    }
    return studentData;
  }

  //get a specific student by using id

  async getStudent(studentId:string):Promise<IStudent>{
    const existingStudent = await this.StudentModel.findById(studentId)
    if(!existingStudent){
        throw new NotFoundException(`Student #${studentId} not found`)
    }
    return existingStudent;
  }

  //delete a student by using its id

  async deleteStudent(studentId:string):Promise<IStudent>{
    const deleteStudent = await this.StudentModel.findByIdAndDelete(studentId)
    if(!deleteStudent){
        throw new NotFoundException(`Student #${studentId} not found`)
    }
    return deleteStudent;
  } 

  //updating existing student using its id

  async updateStudent(studentId: string, updateStudentDto: UpdateStudentDto):Promise<IStudent>{
    const existingStudent = await this.StudentModel.findByIdAndUpdate(studentId,updateStudentDto,{new:true})
if(!existingStudent)  {
    throw new NotFoundException(`Student #${studentId} not found`)
}
return existingStudent;
}
}
