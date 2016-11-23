import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'app/loginComponents/login.component.html',
  styleUrls: ['app/loginComponents/login.component.css']
})
export class loginComponent {
  constructor(public router: Router) {
    if( window.localStorage.getItem("userLoggedIn") == "true")
      router.navigate(['home']);
    }
   user = {
    username:'',
    password:'',
    email:''
  }
  	errShow:boolean;

  	signIn(event){
    event.preventDefault();
	  	if(this.user.username === 'admin' && this.user.password === 'admin'){
        window.localStorage.setItem("userLoggedIn","true");
	  		this.errShow= false;
        this.router.navigate(['home']);
	  		}
	  	else{
		  	this.errShow= true;
	  	}
  	}
  	chkInput(){
  		this.errShow= false;
  	}

}
