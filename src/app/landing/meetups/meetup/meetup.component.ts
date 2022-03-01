import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ValidationService } from "src/app/services";
import { MeetingsService } from "src/app/services/meetings";

@Component({
    selector:'app-meetup',
    templateUrl:'./meetup.component.html',
    styleUrls:['./meetup.component.css']
})
export class Meetup{
    @Input() meetup:any;

    constructor(private validate:ValidationService,
                private router:Router,
                private _meetup:MeetingsService){    }
    
    addToFavorite(){
         if(this.validate.userToken.length<1){
             this.router.navigateByUrl('/login');
         }
         else{
            this._meetup.addToFavorite(this.meetup)
        }
    }



    checkFavorite(){
        return this._meetup.checkIfExists(this.meetup)
    }
}