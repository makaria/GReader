import {Injectable} from '@angular/core'
import {BookShelfModel} from '../models/bookshelf.model'
import {BookModel} from '../models/book.model'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookInterface} from '../interfaces/book.interface'
@Injectable()
export class BookService {
  getBookShelfs(): [BookShelfInterface] {
      let a: BookShelfModel
      return [a]
  }

  getCurrentBook(): BookInterface {
      let b: BookModel
      return b
  }
}
