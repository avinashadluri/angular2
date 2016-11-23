import { Component } from '@angular/core';

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