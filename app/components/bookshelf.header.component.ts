import {Component} from '@angular/core'
@Component({
  selector: 'greader-bookshelf-header',
  templateUrl: 'app/templates/bookshelf.header.component.html'
})
export class BookShelfHeaderComponent {
get platform(): string {
    return process.platform
  }
}
