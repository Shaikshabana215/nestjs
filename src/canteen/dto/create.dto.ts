import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Meal, Tiffin } from 'src/schema/canteen.schema';

export class CreateCanteenDto {
  @IsNotEmpty()
  @IsString()
  readonly snacks: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  readonly Tiffin: Tiffin;

  @IsNotEmpty()
  readonly Meal: Meal;
}
