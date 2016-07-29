import {Component, OnInit} from '@angular/core'
import {ReaderHeaderComponent} from './reader.header.component'
import {ReaderContentComponent} from './reader.content.component'
import {ReaderFooterComponent} from './reader.footer.component'
import {BookInterface} from '../interfaces/book.interface'
import {BookService} from '../services/book.service'
import {IpcService} from '../services/ipc.service'
@Component({
  selector: 'greader-reader',
  templateUrl: 'app/templates/reader.component.html',
  directives: [ReaderHeaderComponent, ReaderContentComponent, ReaderFooterComponent]
})
export class ReaderComponent implements OnInit {
  private _book: BookInterface
  constructor(private bookService: BookService, private ipcService: IpcService) {
    this._book = bookService.currentBook
  }

  ngOnInit() {
    // @TODO
  }
 }
