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
    flag=false;
    constructor(private validate:ValidationService,
                private router:Router,
                private _meetup:MeetingsService){    }
    
    addToFavorite(){
         if(this.validate.userToken.length<1){
             this.router.navigateByUrl('/login');
             this.flag=false;
         }
         else{
            this._meetup.addToFavorite(this.meetup)
            this.flag=true
        }
    }



    checkFavorite(){
        return this._meetup.checkIfExists(this.meetup)
    }
}