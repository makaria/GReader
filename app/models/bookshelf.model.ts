import {BookModel} from './book.model'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'

export class BookShelfModel implements BookShelfInterface{
  name: string
  order: number
  books: [BookModel]
}
