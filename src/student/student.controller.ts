import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { StudentService } from './student.service';

import { response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Roles('admin', 'employee', 'examination', 'student')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    // console.log(createStudentDto);
    try {
      const newStudent =
        await this.studentService.createStudent(createStudentDto);
      // console.log(newStudent);
      return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created sucessfully',
        newStudent,
      });
    } catch (err) {
      console.log(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error Student not created',
        error: 'Bad Request',
      });
    }
  }

  @Roles('admin', 'employee', 'student')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/sget')
  async getStudents(@Res() response) {
    try {
      const studentData = await this.studentService.getAllStudent();
      return response.status(HttpStatus.OK).json({
        message: 'All Students data found sucessfully',
        studentData,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error Student not created',
        error: 'Bad Request',
      });
    }
  }

  @Roles('admin', 'employee', 'student')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/:id')
  async getStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const getStudent = await this.studentService.getStudent(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'One Student Data Sucessfullly found',
        getStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Roles('admin', 'employee', 'student')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('/:id')
  async UpdateStudent(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    try {
      const existingStudent = await this.studentService.updateStudent(
        studentId,
        updateStudentDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Student has been sucessfully updated',
        existingStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Roles('admin', 'employee')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('/:id')
  async deleteStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const deleteStudent = await this.studentService.deleteStudent(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Student has been sucessfully deleted',
        deleteStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
