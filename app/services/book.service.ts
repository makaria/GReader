import { Injectable } from '@angular/core'
import {BookShelfModel} from '../models/bookshelf.model'
import {BookModel} from '../models/book.model'
@Injectable()
export class BookService {
  getBookShelfs(): [BookShelfModel] {
      let a: BookShelfModel
      return [a]
  }

  getCurrentBook(): BookModel {
      let b: BookModel
      return b
  }
}
