import {ChapterInterface} from './chapter.interface'
import {BookMarkInterface} from '../interfaces/bookmark.interface'

export class BookInterface{
  title: string
  author: string
  chapters: [ChapterInterface]
  bookmarks: [BookMarkInterface]
}
