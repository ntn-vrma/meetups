import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MeetingsService, ValidationService } from "src/app/services";

@Component({
    selector:'app-favorites',
    templateUrl:'./favorites.component.html',
    styleUrls:['./favorites.component.css']
})
export class FavoritesComponent{
    favorites:any[]=[]
    constructor(private _isLogin:ValidationService, private router:Router, private _meetup:MeetingsService){
        this.favorites=this._meetup.favoriteMeetups;
        console.log(this.favorites)
    }
    
}