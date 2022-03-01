import { Injectable } from "@angular/core";

@Injectable()
export class MeetingsService{

    favoriteMeetups:any[]=[]
    allMeetups:any[]=[]

    addtoMeetups(meetupToAdd:any){
        if(!this.allMeetups.some(item=>item.id===meetupToAdd.id))
        {
            this.allMeetups.push(meetupToAdd)
        }
    }
    
    getAllMeetups(){
       
        return this.allMeetups;
    }

    addToFavorite(itemToAdd:any){
        if(!this.favoriteMeetups.some(item=>item.id === itemToAdd.id)){
            this.favoriteMeetups.push(itemToAdd);
        }
    }

    removeFromFavorites(itm:any){
        this.favoriteMeetups = this.favoriteMeetups.filter(item=>item.id !==itm.id);
    }

    checkIfExists(itm:any){
        return this.favoriteMeetups.some(item=>item.id === itm.id)
    }

    getFavorites(){
        return this.favoriteMeetups;
    }
}
    