import {Component} from '@angular/core'
import {HeaderComponent} from './header.component'
import {ContentComponent} from './content.component'
import {FooterComponent} from './footer.component'
import {BookInterface} from '../interfaces/book.interface'
import {BookService} from '../services/book.service'
import {OnInit} from '@angular/core'
import {IpcService} from '../services/ipc.service'
@Component({
  selector: 'greader-reader',
  templateUrl: 'app/templates/reader.component.html',
  directives: [HeaderComponent, ContentComponent, FooterComponent]
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
