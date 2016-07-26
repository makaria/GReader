import {ChapterInterface} from './chapter.interface'
import {BookMarkInterface} from '../interfaces/bookmark.interface'

export interface BookInterface{
  title: string
  author: string
  chapters: [ChapterInterface]
  bookmarks: [BookMarkInterface]
}
