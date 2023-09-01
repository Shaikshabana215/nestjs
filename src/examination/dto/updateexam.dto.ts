import { PartialType } from '@nestjs/mapped-types';
import { CreateExamDto } from './createexam.dto';

export class UpdateExamDto extends PartialType(CreateExamDto) {}
