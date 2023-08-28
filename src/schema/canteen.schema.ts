import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Tiffin {
    Poori = 'Poori',
    Dosa = 'Dosa',
    Idli = 'Idli',
    Chapathi = 'Capathi',
};
export enum Meal {
    Lunch = "{Daal, Rice, Curd, Sambar, Bhendi Fry, Tomato Chutney}",
    Biryani = '{ Biryani Rice, Raita, Curry}',
    FriedRice = 'Friedrice',
    CurdRice = 'Curdrice',
}

@Schema({
  timestamps: true,
})
export class Canteen {
  @Prop()
  snacks: string;

  @Prop()
  name: string;

  @Prop()
  Price: number;

  @Prop() 
  Tiffin: Tiffin;

  @Prop() 
  Meal: Meal;
}

export const CanteenSchema = SchemaFactory.createForClass(Canteen)