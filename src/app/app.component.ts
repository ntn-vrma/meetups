import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _loggedIn:ValidationService,private router:Router){

  }
  eventHandler(eve:any){
    switch(eve.type){
      case 'LOGIN': 
        this.router.navigateByUrl('/login');
        break;
      case 'LOGOUT':
        this._loggedIn.userLoggedIn.next(false)
        this.router.navigateByUrl('/login')
        break;
    }
  }
 
}
