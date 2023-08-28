import { category } from "src/schema/book.schema"


export class UpdateBookDto{
    readonly title: string
    readonly description: string
    readonly author: string
    readonly price: number
    readonly category: category
}