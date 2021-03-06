import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ValidationService } from "src/app/services";
import { MeetingsService } from "src/app/services/meetings";


@Component({
    selector:'app-meetup',
    templateUrl:'./meetup.component.html',
    styleUrls:['./meetup.component.css']
})
export class Meetup implements OnInit{
    @Input() meetup:any;
    
    showRemove=false;
    ifExists=false;
    constructor(private validate:ValidationService,
                private router:Router,
                private _meetup:MeetingsService){
                    this._meetup.favoriteButton.subscribe((res:any)=>{
                        this.ifExists=res;
                    })
    }
    ngOnInit(): void {
        
        if(this._meetup.checkIfExists(this.meetup)){
             this.ifExists=true;
         }
         else{
             this.ifExists=false
        }
    }
                    
    
    addToFavorite(){
        if(this.validate.userToken.length<1){
            this.router.navigateByUrl('/login');  
         }
        else{
             if(this._meetup.checkIfExists(this.meetup)){ 
                this.ifExists=true;
             }
             else{
                this.ifExists=true;
                
                this._meetup.addToFavorite(this.meetup)  
            }
        }
    }

    clickHandler(){
        let id=this.meetup.id;
        this.router.navigateByUrl('/meetups/'+id)
    }

    onRemove(){
        if(this.validate.userToken.length<1){
            this.router.navigateByUrl('/login');
        }
        else{
            this.ifExists=false
            this._meetup.removeFromFavorites(this.meetup)
            this.router.navigateByUrl('/loading', { skipLocationChange: true }).then(() => {
                this.router.navigateByUrl('/favorites');
            }); 
        }
    }
    
    checkFavorite(){
        return this._meetup.checkIfExists(this.meetup)
    }
}