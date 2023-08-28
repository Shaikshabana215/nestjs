import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { Book } from 'src/schemas/book.schema';


@Injectable()
export class BookService {
    deleteById(id: string): Book | PromiseLike<Book> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(Book.name)
private bookModel: mongoose.Model<Book>
    ){}

    async findAll(): Promise<Book[]>{
        const books = await this.bookModel.find()
        return books;
    }

    async create(book: Book): Promise<Book>{
        const res = await this.bookModel.create(book)
        return res;
    }

    async findById(id: string): Promise<Book>{
        const book = await this.bookModel.findById(id);
        return book;
    }

    async updateById(id: string,book: Book): Promise<Book>{
        return await this.bookModel.findByIdAndUpdate(id, book,{
            new: true,
            runValidators: true,
        }); 
    }

    async deleteId(id: string): Promise<Book>{
        return await this.bookModel.findByIdAndDelete(id)
    }

}
