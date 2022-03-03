import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ValidationService } from ".";
import { Subject, take } from "rxjs";

@Injectable()
export class MeetingsService{
    favoriteButton=new Subject<boolean>();
    newMeetingButton=false;
    favoriteMeetups:any[]=[]
    allMeetups:any[]=[]
    constructor(private _http:HttpClient, private _validate:ValidationService,
        private _router:Router){}

    addtoMeetups(meetupToAdd:any){
        if(!this.allMeetups.some(item=>item.id===meetupToAdd.id))
        {
            this.allMeetups.push(meetupToAdd)
        }
    }

    getAllMeetups() {
        this._http.get('https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
        .subscribe((res:any)=>{
            for(let meetup in res){
                res[meetup].id=meetup.substring(1);
                this.addtoMeetups(res[meetup])
            }
        });
    }
    postToAPI(meetingSpecs:any){
        if(this._validate.userToken.length<1){
            this._router.navigateByUrl('/login')
        }
        else{
            if((meetingSpecs.title.length && meetingSpecs.description.length
                && meetingSpecs.address.length && meetingSpecs.image.length)){
                    this.newMeetingButton=true;
                    //this._meeting.addtoMeetups(this.meetingSpecs)
                    if(this.checkNewMeetup(meetingSpecs))
                    {
                        this._http.post('https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
                        {
                            title:meetingSpecs.title,
                            description: meetingSpecs.description,
                            image:meetingSpecs.image,
                            address:meetingSpecs.address
                        })
                        .pipe(take(1))
                        .subscribe((res)=>{
                            console.log(res);
                        },
                        (err)=>{
                            console.log(err)
                        })
                        this._router.navigateByUrl('/meetups');
                    }
                    else{
                            alert('this meetup already exists')
                        }
            }
            else{
                this.newMeetingButton=false;
                alert('Enter Details!')
                
            }
        }
    }

    addToFavorite(itemToAdd:any){
        if(!this.favoriteMeetups.some(item=>item.id === itemToAdd.id)){
            this.favoriteMeetups.push(itemToAdd);
        }
    }

    removeFromFavorites(itm:any){
        this.favoriteMeetups = this.favoriteMeetups.filter(item=>item.id !==itm.id);
    }
    getDetails(id: any){
        var __FOUND = -1
        for(let i=0; i<this.allMeetups.length; i++) {
            if(this.allMeetups[i].id == id) {
                __FOUND = i;
                break;
            }
        }
        return this.allMeetups[__FOUND];
    }

    checkIfExists(itm:any){
        return this.favoriteMeetups.some(item=>item.id === itm.id)
    }

    checkNewMeetup(item:any){
        let res=true;
        for(let i=0;i<this.allMeetups.length;i++){
            if(item.id==this.allMeetups[i].id && item.title==this.allMeetups[i].title
                && item.description==this.allMeetups[i].description &&
                item.address==this.allMeetups[i].address){
                    res=false
            }
        }
        return res;
        
    }

    getFavorites(){
        return this.favoriteMeetups;
    }
}
    