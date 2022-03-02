import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output,EventEmitter} from "@angular/core";
import { Router } from "@angular/router";
import { take } from "rxjs";
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
                private _router:Router,
                private _http:HttpClient){
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
        this._meeting.postToAPI(this.meetingSpecs)
    }
}