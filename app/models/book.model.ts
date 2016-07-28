import {BookInterface} from '../interfaces/book.interface'
import {ChapterInterface} from '../interfaces/chapter.interface'
import {BookMarkInterface} from '../interfaces/bookmark.interface'

export class BookModel implements BookInterface{
  title: string
  author: string
  filename: string
  chapters: Array<ChapterInterface>
  bookmarks: Array<BookMarkInterface>

  constructor(filename: string) {
    this.filename = filename
  }
}
