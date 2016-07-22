import {Component} from '@angular/core'
import {HeaderComponent} from './header.component'
import {ContentComponent} from './content.component'
import {FooterComponent} from './footer.component'
@Component({
  selector: 'greader-reader',
  templateUrl: 'app/templates/reader.component.html',
  directives: [HeaderComponent, ContentComponent, FooterComponent]
})
export class ReaderComponent { }
