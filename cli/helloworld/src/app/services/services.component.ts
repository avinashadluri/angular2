import { Component, OnInit } from '@angular/core';

import {NewServiceService} from './new-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  items:string;
  constructor(private _newService:NewServiceService) {
  }
  ngOnInit() {
    console.log(1);
    this.items = this._newService.getItems();
  }

}
