import {Component, OnInit} from '@angular/core'
import {BookShelfComponent} from './bookshelf.component'
import {BookService} from '../services/book.service'
import {BookInterface} from '../interfaces/book.interface'
import {IpcService} from '../services/ipc.service'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
@Component({
  selector: 'greader-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [BookShelfComponent],
  providers: [BookService, IpcService]
})
export class AppComponent implements OnInit {
  private bookShelves: Array<BookShelfInterface>
  private book: BookInterface

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
