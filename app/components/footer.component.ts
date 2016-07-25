import {Component} from '@angular/core'
import {BookInterface} from '../interfaces/book.interface'
import {BookService} from '../services/book.service'
import {OnInit} from '@angular/core'
import {IpcService} from '../services/ipc.service'
@Component({
  selector: 'greader-footer',
  templateUrl: 'app/templates/footer.component.html'
})

export class FooterComponent implements OnInit {
  private _book: BookInterface
  private _firstPageNumber: number
  private _secondPageNumber: number
  private _forwardJumpPage: number
  private _backwardJumpPage: number
  constructor(private bookService: BookService, private ipcService: IpcService) {
    this._book = bookService.currentBook
    this._firstPageNumber = 1
    this._secondPageNumber = 2
    this._forwardJumpPage = -1
    this._secondPageNumber = -1
  }

  ngOnInit() {
    // @TODO
  }

  get firstPageNumber(): number {
    return this._firstPageNumber
  }

  get secondPageNumber(): number {
    return this._secondPageNumber
  }

  get forwardJumpPage(): number {
    return this._forwardJumpPage
  }

  get backwardJumpPage(): number {
    return this._backwardJumpPage
  }
 }
