import {SectionModel} from './section.model'
import {ChapterInterface} from '../interfaces/chapter.interface'
export class ChapterModel implements ChapterInterface{
  name: string
  order: number
  sections: [SectionModel]
}
