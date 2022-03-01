import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MeetingsService, ValidationService } from "src/app/services";

@Component({
    selector:'app-favorite',
    templateUrl:'./favorite.component.html',
    styleUrls:['./favorite.component.css']
})
export class FavoriteComponent{
    @Input() meetup:any;
    constructor(private _meetup:MeetingsService, private validate:ValidationService,
        private router:Router){

    }
    removeFromFavorite(){
        if(this.validate.userToken.length<1){
            this.router.navigateByUrl('/login');
        }
        else{
            this._meetup.removeFromFavorites(this.meetup)
            this.router.navigateByUrl('/loading', { skipLocationChange: true }).then(() => {
                this.router.navigateByUrl('/favorites');
            }); 
        }
    }
}