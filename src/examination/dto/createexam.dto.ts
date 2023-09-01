import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Year, Qualification } from 'src/schema/examination.schema';

export class CreateExamDto {
  @IsString()
  @IsNotEmpty()
  examName: string;

  @IsNumber()
  @IsNotEmpty()
  totalSubjects: number;

  @IsNumber()
  @IsNotEmpty()
  totalMarks: number;

  @IsNotEmpty()
  year: Year;

  @IsNotEmpty()
  qualification: Qualification;
}
