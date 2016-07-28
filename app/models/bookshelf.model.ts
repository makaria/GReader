import {BookInterface} from '../interfaces/book.interface'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'

export class BookShelfModel implements BookShelfInterface {
  private _name: string
  private _books: Array<BookInterface>
  private _order: number
  appendBook(filenames: Array<string>): void {
    // @TODO
  }

  get name(): string {
    return this._name
  }

  get books(): Array<BookInterface> {
    return this._books
  }

  get order(): number {
    return this._order
  }
}
