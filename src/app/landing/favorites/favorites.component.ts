import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MeetingsService, ValidationService } from "src/app/services";

@Component({
    selector:'app-favorites',
    templateUrl:'./favorites.component.html',
    styleUrls:['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
    favorites:any[]=[]
    isLogin=false;
    constructor(private _isLogin:ValidationService, private router:Router, private _meetup:MeetingsService){
        this._isLogin.isUserLoggedIn().subscribe((res:any)=>{
            this.isLogin=res;
        });
    }
    ngOnInit(): void {
        if(this._isLogin.userToken.length>0){
                this.favorites=this._meetup.favoriteMeetups;
                console.log(this.favorites)
        }
        else{
            this.router.navigateByUrl('/login')
        }
    }    
}