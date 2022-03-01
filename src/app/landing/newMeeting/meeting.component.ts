import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output,EventEmitter} from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ValidationService } from "src/app/services";
import { MeetingsService } from "src/app/services/meetings";


@Component({
    selector:'app-meeting',
    templateUrl:'./meeting.component.html',
    styleUrls:['./meeting.component.css']
})
export class MeetingComponent{
    constructor(private _meeting:MeetingsService,
                private _validate:ValidationService,
                private _router:Router){
    }

    meetingSpecs={
        id: Math.floor((Math.random() * 1000) + 1),
        title:'',
        image:'',
        address:'',
        description:''
    }
    buttonSpecs={
        type:'submit',
        name:'add_meetup',
        disable:true,
        buttonClass:'btn btn-primary',
        style:'width:100%;margin-top:8px;'
    }

    onSubmit(){
        if(this._validate.userToken.length<1){
            this._router.navigateByUrl('/login')
        }
        else{
            if((this.meetingSpecs.title.length && this.meetingSpecs.description.length
                && this.meetingSpecs.address.length && this.meetingSpecs.image.length)){
                    this._meeting.addtoMeetups(this.meetingSpecs)
                    this._router.navigateByUrl('/meetups')
            }
            alert("enter valid details")
        }

    }
}