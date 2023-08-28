import { category } from "src/schemas/book.schema"

export class createBookDto{
    readonly title: string
    readonly description: string
    readonly price: number
    readonly author: string
    readonly category: category
}