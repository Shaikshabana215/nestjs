import { Module } from '@nestjs/common';
import { CanteenService } from './canteen.service';
import { CanteenController } from './canteen.controller';
import { CanteenSchema } from 'src/schema/canteen.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Canteen', schema:CanteenSchema}])],
  controllers: [CanteenController],
  providers: [CanteenService],
})
export class CanteenModule {}


