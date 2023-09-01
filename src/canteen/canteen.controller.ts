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
import { CanteenService } from './canteen.service';
import { Canteen } from 'src/schema/canteen.schema';
import { CreateCanteenDto } from './dto/create.dto';
import { UpdateCanteenDto } from './dto/update.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

// @Roles('admin', 'employee', 'student', 'examination')
// @UseGuards(JwtAuthGuard, RoleGuard)
@Controller('canteen')
export class CanteenController {
  constructor(private readonly canteenService: CanteenService) {}
  @Get()
  async getAllOrders(): Promise<Canteen[]> {
    return this.canteenService.findAll();
  }
  @Post('')
  async createOrder(@Body() canteen: CreateCanteenDto): Promise<Canteen> {
    return this.canteenService.create(canteen);
  }
  @Get(':id')
  async getOrder(@Param('id') id: string): Promise<Canteen> {
    return this.canteenService.findById(id);
  }
  @Put(':id')
  async updateOrder(
    @Param('id')
    id: string,
    @Body()
    canteen: UpdateCanteenDto,
  ): Promise<Canteen> {
    return this.canteenService.updateById(id, canteen);
  }
  @Delete(':id')
  async deleteOrder(
    @Param('id')
    id: string,
  ): Promise<Canteen> {
    return this.canteenService.deleteId(id);
  }

  @Roles('employee')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  employee(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user);
  }
  @Roles('student')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  student(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user);
  }
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  profile(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user);
  }
}
