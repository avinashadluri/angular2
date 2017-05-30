import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  directiveTitle:string = "Default Directives";
  showText:boolean = true;
  products: any[] = [
    { name:"one"},
    { name:"two"},
    { name:"three"},
    { name:"four"},
  ];




  constructor() {}
  ngOnInit() {   }
}
