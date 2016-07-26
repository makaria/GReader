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
  private _forwardJumpPageNumber: number
  private _backwardJumpPageNumber: number
  constructor(private bookService: BookService, private ipcService: IpcService) {
    this._book = bookService.currentBook
    this._firstPageNumber = 1
    this._secondPageNumber = 2
    this._forwardJumpPageNumber = -1
    this._backwardJumpPageNumber = -1
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

  get forwardJumpPageNumber(): number {
    return this._forwardJumpPageNumber
  }

  get backwardJumpPageNumber(): number {
    return this._backwardJumpPageNumber
  }
 }
