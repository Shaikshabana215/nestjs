import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { Response, response } from 'express';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UseGuards(AuthGuard())
  
  async createStudent(@Res() Response, @Body() createStudentDto: CreateStudentDto){
    try{
const newStudent = await this.studentService.createStudent(createStudentDto)
return response.status(HttpStatus.CREATED).json({
  message: "Student has been created sucessfully",
  newStudent
})
    }
    catch(err){
return response.status(HttpStatus.BAD_REQUEST).json({
  statusCode: 400,
  message: "Error Student not created",
  error: "Bad Request"
})
    }
  }

    @Get()
    async getStudents(@Res() Response){
      try{
const studentData = await this.studentService.getAllStudent();
return response.status(HttpStatus.OK).json({
  message: "All Students data found sucessfully",
  studentData
})
      }catch(err){
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: "Error Student not created",
          error: "Bad Request"
        })
      }
    }
    
 @Put('/:id')
 async UpdateStudent(@Res() response, @Param('id') studentId:string, @Body() UpdateStudentDto: UpdateStudentDto){
  try{
    const existingStudent = await this.studentService.updateStudent(studentId,UpdateStudentDto)
    return response.status(HttpStatus.OK).json({
      message: "Student has been sucessfully updated",
      existingStudent,
    })
  }catch(err){
    return response.status(err.status).json(err.response)
  }
 }
  
 @Delete('/:id')
 async deleteStudent(@Res() response, @Param('id') studentId:string, ){
  try{
    const deleteStudent = await this.studentService.deleteStudent(studentId,)
    return response.status(HttpStatus.OK).json({
      message: "Student has been sucessfully deleted",
      deleteStudent,
    })
  }catch(err){
    return response.status(err.status).json(err.response)
  }
 }


}


