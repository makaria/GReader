import {Injectable} from '@angular/core'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookInterface} from '../interfaces/book.interface'
import {BookShelfModel} from '../models/bookshelf.model'
@Injectable()
export class BookService {
  bookShelves: Array<BookShelfInterface>
  private _currentBook: BookInterface
  private _currentBookShelf: BookShelfInterface

  constructor() {
    this.bookShelves = new Array<BookShelfInterface>()
    this._currentBook = null
    this._currentBookShelf = null
  }

  appendBook(filenames: Array<string>, bookshelf: BookShelfInterface = null) {
    // @TODO
    let shelf = bookshelf
    if (shelf === null) {
      shelf = this.currentBookShelf
    }

    shelf.appendBook(filenames)
  }

  get currentBook(): BookInterface {
    return this._currentBook
  }

  set currentBook(val: BookInterface) {
    this._currentBook = val
  }

  get currentBookShelf(): BookShelfInterface {
    if (this._currentBookShelf === null) {
      this._currentBookShelf = new BookShelfModel
    }
    return this._currentBookShelf
  }
}
