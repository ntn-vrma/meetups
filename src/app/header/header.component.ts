import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ValidationService } from "../services";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    isLogin=false;
    @Output() headerEvent =new EventEmitter();
    constructor(private router:Router, private _loggedIn:ValidationService)
    {
        this._loggedIn.userLoggedIn.subscribe((res:any)=>{
            this.isLogin=res
            })
    }

    onLogin(){
        this.headerEvent.emit({
            type:'LOGIN',
            value:true
        })
    }
    onLogout(){
        this.headerEvent.emit({
            type:'LOGOUT',
            value: false
        })
    }

    loginButton={
        buttonClass:'btn btn-primary btn-sm',
        style:'margin:6px',
        disable:true
    }

    logoutButton={
        buttonClass:'btn btn-primary btn-sm',
        style:'margin:6px',
        disable:true
    }

    newMeetHandler(){
        this.router.navigateByUrl('/newMeetup')
    }

    favoritesHandler(){
        if(this.isLogin){
            this.router.navigateByUrl('/favorites')
        }
        else{
            this.router.navigateByUrl('/login')
        }
        
    }
    
    getAllMeetings(){
        this.router.navigateByUrl('/meetups')
    }
}