import {Component} from '@angular/core'
import {BookShelfComponent} from './bookshelf.component'
import {BookService} from '../services/book.service'
import {IpcService} from '../services/ipc.service'
@Component({
  selector: 'greader-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [BookShelfComponent],
  providers: [BookService, IpcService]
})
export class AppComponent {
  constructor(private bookService: BookService, private ipcService: IpcService) {
    ipcService.subscribe('file-open', (event, filenames) => {
      bookService.appendBook(filenames)
    })
  }
 }
