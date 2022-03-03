import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MeetingsService, ValidationService } from "src/app/services";

@Component({
    selector:'app-viewmeetup',
    templateUrl:'./viewmeetup.component.html',
    styleUrls:['./viewmeetup.component.css']
})
export class ViewMeetupComponent implements OnInit{
    id:any;
    meetup:any;
    ifExists=false;
    constructor(private _active:ActivatedRoute,
                private _meetup:MeetingsService,
                private validate:ValidationService,
                private router:Router){
                    this._meetup.favoriteButton.subscribe((res:any)=>{
                        this.ifExists=res;
                    }) 
                }

    ngOnInit(): void {
        
        
        this._active.params.subscribe((res:any)=>{
                const id= this._active.snapshot.paramMap.get("id");
                this.meetup=this._meetup.getDetails(id)
        })
        this.buttonHandler()
    }

    buttonHandler(){
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
    
}