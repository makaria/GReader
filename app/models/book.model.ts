import {BookInterface} from '../interfaces/book.interface'
import {ChapterModel} from './chapter.model'
import {BookMarkModel} from './bookmark.model'

export class BookModel implements BookInterface{
  title: string
  author: string
  chapters: [ChapterModel]
  bookmarks: [BookMarkModel]
}
