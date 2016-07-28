import {Component, OnInit} from '@angular/core'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookService} from '../services/book.service'
import {IpcService} from '../services/ipc.service'
import {BookInterface} from '../interfaces/book.interface'
@Component({
  selector: 'greader-bookshelf',
  templateUrl: 'app/templates/bookshelf.component.html',
  directives: []
})
export class BookShelfComponent implements OnInit {
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
 }
