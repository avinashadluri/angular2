import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '.container-fluid',
  template: '<router-outlet></router-outlet>',
})

export class Root {
  constructor(public router: Router) {}
  
}
