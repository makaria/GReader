import {Component} from '@angular/core'
import {BookService} from '../services/book.service'
import {BookInterface} from '../interfaces/book.interface'
@Component({
  selector: 'greader-reader-content',
  templateUrl: 'app/templates/reader.content.component.html'
})
export class ReaderContentComponent {
  constructor(private bookService: BookService) {
    // do nothing
  }

  get book(): BookInterface {
    return this.bookService.currentBook
  }
}
