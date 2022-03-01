import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ValidationService{
    
    userValid=new Subject<Boolean>();
    userLoggedIn=new Subject<Boolean>();
    userToken='';
    setToken(token:string){
        this.userToken=token;
    }
    isUserLoggedIn(){
        return this.userLoggedIn;
    }
}