import { Module } from '@nestjs/common';
import { ExaminationService } from './examination.service';
import { ExaminationController } from './examination.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ExaminationSchema } from 'src/schema/examination.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: 'Examination', schema: ExaminationSchema },
    ]),
  ],

  controllers: [ExaminationController],
  providers: [ExaminationService],
  exports: [ExaminationService],
})
export class ExaminationModule {}
