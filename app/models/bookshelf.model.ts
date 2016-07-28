import {BookInterface} from '../interfaces/book.interface'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookModel} from './book.model'

export class BookShelfModel implements BookShelfInterface {
  name: string
  books: Array<BookInterface> = new Array<BookInterface>()
  order: number

  appendBook(filenames: Array<string>): void {
    // @TODO
    for (let file of filenames) {
      this.books.push(new BookModel(file))
    }
  }
}
