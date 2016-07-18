import { Component } from '@angular/core';
import {ReaderComponent} from './reader.component'
@Component({
  selector: 'greader-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [ReaderComponent]
})
export class AppComponent { }
