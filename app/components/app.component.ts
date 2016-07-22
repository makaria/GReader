import { Component } from '@angular/core'
import {ReaderComponent} from './reader.component'
import { BookService } from '../services/book.service'
import {BookShelfModel} from '../models/bookshelf.model'
import {BookModel} from '../models/book.model'
import { OnInit } from '@angular/core'
@Component({
  selector: 'greader-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [ReaderComponent],
  providers: [BookService, BookModel]
})
export class AppComponent implements OnInit {
  bookShelfs: [BookShelfModel]
  currentBook: BookModel

  constructor(private bookService: BookService) {

  }
  ngOnInit() {
    this.bookShelfs = this.bookService.getBookShelfs()
    this.currentBook = this.bookService.getCurrentBook()
  }
 }
