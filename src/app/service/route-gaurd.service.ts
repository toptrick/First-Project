import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HardcodedAutenticationService } from './hardcoded-autentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(
    private hardcodedAutentication: HardcodedAutenticationService,
    private  router:Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAutentication.isUserLoggedin()) {
      return true;
    }
    else {
      this.router.navigate(['login'])
      return false;
    }
    
    

  }
}
