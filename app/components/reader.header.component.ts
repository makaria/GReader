import {Component} from '@angular/core'
@Component({
  selector: 'greader-reader-header',
  templateUrl: 'app/templates/reader.header.component.html'
})
export class ReaderHeaderComponent {
  get platform(): string {
    return process.platform
  }
}
