import { Component } from '@angular/core';
import { TestComponent } from './testcomponent/test.component';

@Component({
  selector: '.wrapper',
  templateUrl: `app/appcomponent/app.component.html`,
  styleUrls:['app/appcomponent/app.component.css']
})
export class AppComponent {
  user = {
    username:'',
    password:'',
    email:''
  }

  onSubmit(event) {
    event.preventDefault();
    alert("Thanks...");
  }
 }