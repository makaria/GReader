import {Component, OnInit} from '@angular/core'
import {BookShelfInterface} from '../interfaces/bookshelf.interface'
import {BookService} from '../services/book.service'
import {IpcService} from '../services/ipc.service'
@Component({
  selector: 'greader-bookshelf',
  templateUrl: 'app/templates/bookshelf.component.html',
  directives: []
})
export class BookShelfComponent implements OnInit {
  private _bookShelf: BookShelfInterface
  constructor(private bookService: BookService, private ipcService: IpcService) {
    this._bookShelf = bookService.defaultBookShelf()
  }

  ngOnInit() {
    // @TODO
  }
 }
