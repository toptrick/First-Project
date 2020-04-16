import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HardcodedAutenticationService } from '../service/hardcoded-autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userName=''
 password=''
 errorMessage='InvalidCredentials'
 invalidLogin=false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router,
    private hardcodedautentication:HardcodedAutenticationService) {}
 
  ngOnInit() {
  }

  handleLogin(){
       
    if(this.hardcodedautentication.auth(this.userName,this.password)){
      this.router.navigate(['welcome', this.userName])
      this.invalidLogin=false
    }
    else{
    this.invalidLogin=true
    }


  }

}
