import {Component, OnInit} from '@angular/core'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookService} from '../services/book.service'
import {IpcService} from '../services/ipc.service'
import {BookInterface} from '../interfaces/book.interface'
@Component({
  selector: 'greader-bookshelf-content',
  templateUrl: 'app/templates/bookshelf.content.component.html'
})
export class BookShelfContentComponent implements OnInit {
  bookShelf: BookShelfInterface
  constructor(private bookService: BookService, private ipcService: IpcService) {
    this.bookShelf = bookService.currentBookShelf
  }

  ngOnInit() {
    // @TODO
  }

  get books(): Array<BookInterface> {
    return this.bookShelf.books
  }

  openBook(book: BookInterface) {
    this.ipcService.send('open-reader', book)
  }
}
