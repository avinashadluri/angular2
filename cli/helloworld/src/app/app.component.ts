import { Component } from '@angular/core';

import {NewServiceService} from './services/new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewServiceService]
})
export class AppComponent {
  pageTitle:string = 'Angular 2 Demos';
}
