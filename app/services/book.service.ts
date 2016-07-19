import { Injectable } from '@angular/core'
import {BookShelf} from '../model/bookshelf'
import {Book} from '../model/book'
@Injectable()
export class BookService {
  getBookShelfs(): [BookShelf] {
      let a: BookShelf
      return [a]
  }

  getCurrentBook(): Book {
      let b: Book
      return b
  }
}
