import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Qualification {
  MBA = 'MBA',
  MCom = 'MCom',
  BTech = 'BTech',
  Diploma = 'Diploma',
}
export enum Year {
  IYear = 'IYear',
  IIYear = 'IIYear',
  IIIYear = 'IIYear',
  IVYear = 'IVYear',
}

@Schema({
  timestamps: true,
})
export class Examination {
  @Prop()
  examName: string;

  @Prop()
  studentName: string;

  @Prop()
  rollNumber: number;

  @Prop()
  totalSubjects: number;

  @Prop()
  totalMarks: number;

  @Prop()
  year: Year;

  @Prop()
  qualification: Qualification;
}

export const ExaminationSchema = SchemaFactory.createForClass(Examination);
