import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ExaminationService } from './examination.service';
import { Examination } from 'src/schema/examination.schema';
import { CreateExamDto } from './dto/createexam.dto';
import { UpdateExamDto } from './dto/updateexam.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('examination')
export class ExaminationController {
  constructor(private readonly examinationService: ExaminationService) {}

  @Roles('admin', 'employee')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/get')
  async getAllOrders(): Promise<Examination[]> {
    return this.examinationService.findAll();
  }
  @Roles('admin', 'employee')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('')
  async createOrder(@Body() examination: CreateExamDto): Promise<Examination> {
    return this.examinationService.create(examination);
  }
  @Roles('admin', 'employee', 'student')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':id')
  async getOrder(@Param('id') id: string): Promise<Examination> {
    return this.examinationService.findById(id);
  }
  @Roles('admin', 'employee')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put(':id')
  async updateOrder(
    @Param('id')
    id: string,
    @Body()
    examination: UpdateExamDto,
  ): Promise<Examination> {
    return this.examinationService.updateById(id, examination);
  }

  @Roles('admin', 'employee')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':id')
  async deleteOrder(
    @Param('id')
    id: string,
  ): Promise<Examination> {
    return this.examinationService.deleteId(id);
  }

  // @Roles('employee')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Get()
  // employee(@Req() req, @Res() res) {
  //   return res.status(HttpStatus.OK).json(req.user);
  // }
}
