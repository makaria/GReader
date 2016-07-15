import {Chapter} from './chapter'
import {BookMark} from './bookmark'

export class Book{
  title: string
  author: string
  chapters: [Chapter]
  bookmarks: [BookMark]
}
