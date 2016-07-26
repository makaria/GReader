import {BookInterface} from './book.interface'

export interface BookShelfInterface{
  name: string
  order: number
  books: [BookInterface]
  appendBook(filenames: Array<string>): void
}
