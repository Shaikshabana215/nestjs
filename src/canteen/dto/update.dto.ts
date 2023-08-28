import { Meal, Tiffin } from "src/schema/canteen.schema"

export class UpdateCanteenDto{
    readonly snacks: string
    readonly name: string
    readonly price: number
    readonly Tiffin: Tiffin
    readonly Meal: Meal
}