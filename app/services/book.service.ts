import {Injectable} from '@angular/core'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookInterface} from '../interfaces/book.interface'
import {BookShelfModel} from '../models/bookshelf.model'
@Injectable()
export class BookService {
  private _bookShelfs: BookShelfInterface[]
  private _currentBook: BookInterface
  get bookShelfs(): BookShelfInterface[] {
      return this._bookShelfs
  }

  set bookShelfs(val: BookShelfInterface[]) {
    this._bookShelfs = val
  }

  appendBook(filenames: string[], bookshelf: BookShelfInterface = null) {
    // @TODO
    let shelf = bookshelf
    if (shelf === null) {
      shelf = this.defaultBookShelf()
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

  defaultBookShelf(): BookShelfInterface {
    // return the default bookshelf

    // if bookshelf list are empty, create one bookshelf
    if (this._bookShelfs.length === 0) {
      this._bookShelfs.push(new BookShelfModel())
    }

    // return the first shelf in the list
    return this._bookShelfs[0]
  }
}
