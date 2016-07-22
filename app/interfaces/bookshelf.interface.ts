import {BookInterface} from './book.interface'

export class BookShelfInterface{
  name: string
  order: number
  books: [BookInterface]
}
