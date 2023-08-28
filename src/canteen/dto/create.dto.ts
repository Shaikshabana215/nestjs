import { Meal, Tiffin } from "src/schema/canteen.schema"

export class CreateCanteenDto{

    readonly snacks: string

    readonly name: string

    readonly price: number

    readonly Tiffin: Tiffin
    
    readonly Meal: Meal
}
