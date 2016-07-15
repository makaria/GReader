import { Component } from '@angular/core';
import {HeaderComponent} from './header.component'
import {ContentComponent} from './content.component'
import {FooterComponent} from './footer.component'
@Component({
  selector: 'greader-reader',
  template: `
  <greader-header></greader-header>
  <greader-content></greader-content>
  <greader-footer></greader-footer>
  `,
  directives: [HeaderComponent, ContentComponent, FooterComponent]
})
export class ReaderComponent { }
