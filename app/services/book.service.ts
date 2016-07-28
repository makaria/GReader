import {Injectable} from '@angular/core'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookInterface} from '../interfaces/book.interface'
import {BookShelfModel} from '../models/bookshelf.model'
@Injectable()
export class BookService {
  private _bookShelves: Array<BookShelfInterface>
  private _currentBook: BookInterface
  private _currentBookShelf: BookShelfInterface

  constructor() {
    this._bookShelves = new Array<BookShelfInterface>()
  }

  get bookShelves(): Array<BookShelfInterface> {
      return this._bookShelves
  }

  set bookShelves(val: Array<BookShelfInterface>) {
    this._bookShelves = val
  }

  appendBook(filenames: Array<string>, bookshelf: BookShelfInterface = null) {
    // @TODO
    let shelf = bookshelf
    if (shelf === null) {
      shelf = this.currentBookShelf
    }

    shelf.appendBook(filenames)
  }

  openBook(book: BookInterface) {
    // @TODO
  }

  closeBook(book: BookInterface) {
    // @TODO
  }

  get currentBook(): BookInterface {
    return this._currentBook
  }

  get currentBookShelf(): BookShelfInterface {
    if (this._currentBookShelf === null) {
      this._currentBookShelf = new BookShelfModel
    }
    return this._currentBookShelf
  }
}
