import { Injectable } from '@angular/core';

@Injectable()
export class NewServiceService {
  items:string = "This data is from service!";
  constructor() { }
  getItems():string {
    return this.items;
  }
}
