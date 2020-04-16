import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAutenticationService {

  constructor() { }

  auth(username:any,password:any){
    if(username==='toptricks.net' && password==='dummy'){
      sessionStorage.setItem('autenticateUser',username);
      return true
    }
    else {
      return false
    }
  }

  isUserLoggedin(){
    let user =sessionStorage.getItem('autenticateUser');
    return (user!=null);
  }
  logout(){
    sessionStorage.removeItem('autenticateUser');
  }

}
