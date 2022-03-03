import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ValidationService } from "src/app/services";
import { MeetingsService } from "src/app/services/meetings";

@Component({
    selector:'app-meetings',
    templateUrl:'./meetings.component.html',
    styleUrls:['./meetings.component.css']
})
export class MeetingsComponent implements OnInit{

    array:any=[];
    
    constructor(private _http: HttpClient, private validate:ValidationService,
        private _meetings:MeetingsService,private router:Router) {
        this.array=this._meetings.allMeetups
    }

    ngOnInit(): void {
        this._meetings.getAllMeetups();
    }
    
}