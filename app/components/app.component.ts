import {Component} from '@angular/core'
import {ReaderComponent} from './reader.component'
import {BookService} from '../services/book.service'
import {BookShelfModel} from '../models/bookshelf.model'
import {BookModel} from '../models/book.model'
import {OnInit} from '@angular/core'
import {IpcService} from '../services/ipc.service'
@Component({
  selector: 'greader-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [ReaderComponent],
  providers: [BookService, BookModel, IpcService]
})
export class AppComponent implements OnInit {
  bookShelfs: Array<BookShelfModel>
  book: BookModel

  constructor(private bookService: BookService, private ipcService: IpcService) {
    ipcService.subscribe('file-open', (event, filenames) => {
      bookService.appendBook(filenames)
    })
  }
  ngOnInit() {
    this.bookShelfs = this.bookService.bookShelfs
  }
 }
