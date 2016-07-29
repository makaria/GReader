import {Component, OnInit} from '@angular/core'
import {BookShelfHeaderComponent} from './bookshelf.header.component'
import {BookShelfContentComponent} from './bookshelf.content.component'
import {BookShelfFooterComponent} from './bookshelf.footer.component'
@Component({
  selector: 'greader-bookshelf',
  templateUrl: 'app/templates/bookshelf.component.html',
  directives: [BookShelfHeaderComponent, BookShelfContentComponent, BookShelfFooterComponent]
})
export class BookShelfComponent implements OnInit {
  ngOnInit() {
    // @TODO
  }
}
