import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { take } from "rxjs";
import { ValidationService } from "src/app/services";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{
    constructor(private _validate:ValidationService,private _http:HttpClient,private router:Router){

    }
    errorMessage='';
    
    loginButton=false;

    username={
        value:'',
        placeholder:'Username',
        type:'text',
        valid:true,
        name:'username',
        msg:'',
        isValid:function(){
        let result=true
        if(this.value.trim().length<1){
          this.msg='Username is required!'
            result=false
          }
          else if(this.value.trim().length<8)
          {
            this.msg='Username must be greater than 8 characters'
            result=false
          }
          this.valid=result
          return result;
        },
        style:'width: 100%'
      };
    
      password={
        value:'',
        placeholder:'Password',
        type:'password',
        valid:true,
        name:'password',
        msg:'',
        isValid:function(){
          let result=true
          if(this.value.trim().length<1){
            this.msg='Password is required!'
            result=false 
          }
          else if(this.value.trim().length<8)
          {
            this.msg='Password must be greater than 8 characters'
            result=false
          }
          this.valid=result
          return result;
        },
        style:'width: 100%'
      };
    
      buttonSpecs={
        type:'submit',
        name:'Login',
        disable:true,
        buttonClass:'btn btn-primary',
        style:'width:100%; margin-top:5px;'
      }

      onSubmit()
      {
        
        if((this.username.isValid() && this.password.isValid()))
        {
          this.loginButton=true;
          this._http.post('https://reqres.in/api/login',{
            "email": this.username.value,
            "password": this.password.value
             })
              .pipe(take(1))
                  .subscribe( 
                        (response:any)=>
                        {
                          
                          this.errorMessage = '';
                          this._validate.setToken(response.token);
                          this.router.navigateByUrl('/meetups')
                          this._validate.userLoggedIn.next(true);
                        }, 
                        (err)=>
                        {
                          this.errorMessage = err.error.error;
                          this.loginButton=false;
                          this._validate.userLoggedIn.next(false);
                          this.router.navigateByUrl('/login')
                        }  
                    )
        }
      }
    
}