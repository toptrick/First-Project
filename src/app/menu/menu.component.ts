import { Component, OnInit } from '@angular/core';
import { HardcodedAutenticationService } from '../service/hardcoded-autentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 // isUserloggedIn :boolean = false;
  constructor(private hardcodedautentication:HardcodedAutenticationService) { }

  ngOnInit() {
    //this.isUserloggedIn=this.hardcodedautentication.isUserLoggedin();
  }

}
