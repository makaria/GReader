import {Component, OnInit} from '@angular/core'
import {BookShelfComponent} from './bookshelf.component'
import {BookService} from '../services/book.service'
import {BookModel} from '../models/book.model'
import {IpcService} from '../services/ipc.service'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
@Component({
  selector: 'greader-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [BookShelfComponent],
  providers: [BookService, BookModel, IpcService]
})
export class AppComponent implements OnInit {
  private bookShelves: Array<BookShelfInterface>
  private book: BookModel

  constructor(private bookService: BookService, private ipcService: IpcService) {
    ipcService.subscribe('file-open', (event, filenames) => {
      bookService.appendBook(filenames)
    })
  }
  ngOnInit() {
    this.bookShelves = this.bookService.bookShelves
    this.book = this.bookService.currentBook
  }
 }
