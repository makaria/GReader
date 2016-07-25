import {Injectable} from '@angular/core'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookInterface} from '../interfaces/book.interface'
@Injectable()
export class BookService {
  private _bookShelfs: Array<BookShelfInterface>
  private _currentBook: BookInterface
  get bookShelfs(): Array<BookShelfInterface> {
      return this._bookShelfs
  }

  set bookShelfs(val: Array<BookShelfInterface>) {
    this._bookShelfs = val
  }

  appendBook(filenames: Array<string>) {
    // @TODO
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
}
