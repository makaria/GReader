import { Component } from '@angular/core'
import {ReaderComponent} from './reader.component'
import { BookService } from '../services/book.service'
import {BookShelf} from '../model/bookshelf'
import {Book} from '../model/book'
import { OnInit } from '@angular/core'
@Component({
  selector: 'greader-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [ReaderComponent],
  providers: [BookService, Book]
})
export class AppComponent implements OnInit {
  bookShelfs: [BookShelf]
  currentBook: Book

  constructor(private bookService: BookService) {

  }
  ngOnInit() {
    this.bookShelfs = this.bookService.getBookShelfs()
    this.currentBook = this.bookService.getCurrentBook()
  }
 }
