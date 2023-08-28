import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CanteenService } from './canteen.service';
import { Canteen } from 'src/schema/canteen.schema';
import { CreateCanteenDto } from '../dto/create.dto';
import { UpdateCanteenDto } from '../dto/update.dto';

@Controller('Canteen')
export class CanteenController {
  constructor(private readonly canteenService: CanteenService) {}
  @Get()
  async getAllOrders(): Promise<Canteen[]>{
      return this.canteenService.findAll()
  }
  @Post('')
  async createOrder(@Body() canteen: CreateCanteenDto): Promise<Canteen>{
      return this.canteenService.create(canteen);
  }
  @Get(':id')
  async getOrder(@Param('id') id: string): Promise<Canteen>{
      return this.canteenService.findById(id)
  }
  @Put(':id')
  async updateOrder(
      @Param('id') 
      id: string, 
      @Body() 
      canteen: UpdateCanteenDto): Promise<Canteen>{
      return this.canteenService.updateById(id,canteen);
  }
  @Delete(':id')
  async deleteOrder(
      @Param('id') 
      id: string,
      ): Promise<Canteen>{
          return this.canteenService.deleteId(id)
  }
}



