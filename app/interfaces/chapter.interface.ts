import {SectionInterface} from './section.interface'
export interface ChapterInterface {
  name: string
  order: number
  sections: [SectionInterface]
}
