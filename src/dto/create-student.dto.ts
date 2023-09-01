//creating a new student items using post in Mongo

import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly rollNumber: number;

  @IsNotEmpty()
  @IsNumber()
  readonly class: number;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsNotEmpty()
  @IsNumber()
  readonly marks: number;
}
