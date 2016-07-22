import {SectionInterface} from './section.interface'
export class ChapterInterface {
  name: string
  order: number
  sections: [SectionInterface]
}
