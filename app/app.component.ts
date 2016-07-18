import { Component } from '@angular/core';
import {ReaderComponent} from './reader.component'
@Component({
  selector: 'greader-app',
  template: '<greader-reader></greader-reader>',
  directives: [ReaderComponent]
})
export class AppComponent { }
