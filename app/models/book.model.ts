import {BookInterface} from '../interfaces/book.interface'
import {ChapterInterface} from '../interfaces/chapter.interface'
import {BookMarkInterface} from '../interfaces/bookmark.interface'
import * as path from 'path'
import * as fs from 'fs'

export class BookModel implements BookInterface{
  title: string
  author: string
  cover: string
  filename: string
  content: string
  chapters: Array<ChapterInterface>
  bookmarks: Array<BookMarkInterface>

  constructor(filename: string) {
    this.filename = filename
    this.title = path.basename(filename, path.extname(filename))
    this.cover = 'app/assets/image/default-cover-128x128.png'
    this.author =  ''
    fs.readFile(this.filename, (err, data) => {
      if (!err) {
        this.content = data.toString()
      }
    })
  }
}
