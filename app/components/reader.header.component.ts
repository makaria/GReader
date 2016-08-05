import {Component} from '@angular/core'
import {BookService} from '../services/book.service'
import {BookInterface} from '../interfaces/book.interface'
@Component({
  selector: 'greader-reader-header',
  templateUrl: 'app/templates/reader.header.component.html'
})
export class ReaderHeaderComponent {
  constructor(private bookService: BookService) {
    //  do nothing
  }
  get platform(): string {
    return process.platform
  }

  get book(): BookInterface {
    return this.bookService.currentBook
  }
}
