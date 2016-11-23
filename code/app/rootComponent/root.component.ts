import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '.app-root',
  templateUrl: 'app/rootComponent/root.component.html',
})

export class Root {
  constructor(public router: Router) {}
  
}
