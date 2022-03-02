import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MeetingsService } from "src/app/services/meetings";

@Component({
    selector:'app-meetings',
    templateUrl:'./meetings.component.html',
    styleUrls:['./meetings.component.css']
})
export class MeetingsComponent implements OnInit{

    array:any=[];
    
    constructor(private _http: HttpClient, private _meetings:MeetingsService) {
        this.array=this._meetings.allMeetups
        console.log(this._meetings.allMeetups)
    }

    ngOnInit(): void {
        this.getAllMeetups();
    }

    getAllMeetups() {
        this._http.get('https://meetup-88c8c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
        .subscribe((res:any)=>{
            for(let meetup in res){
                res[meetup].id=meetup;
                this._meetings.addtoMeetups(res[meetup])
            }
        });
    }
    

}