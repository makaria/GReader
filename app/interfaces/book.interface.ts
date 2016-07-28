import {ChapterInterface} from './chapter.interface'
import {BookMarkInterface} from '../interfaces/bookmark.interface'

export interface BookInterface{
  title: string
  author: string
  chapters: Array<ChapterInterface>
  bookmarks: Array<BookMarkInterface>
}
