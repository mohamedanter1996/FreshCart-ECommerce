import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
errorMessage:string="";
  isLoading:boolean=false;
constructor(private _authenticationService:AuthenticationService,private _router:Router,public _loaderService:LoaderService){}
signInForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9!@#$_.]{6,16}$'),Validators.required,Validators.minLength(6),Validators.maxLength(16)])
})

handleSignInForm(signInForm:FormGroup){
   this.isLoading=true;
console.log(signInForm);
this._authenticationService.getSignInUserData(signInForm.value).subscribe({
  next:(response)=>{
     this.isLoading=false;
    console.log(response.token);
    localStorage.setItem("token",response.token)
    this._authenticationService.getTokenUserData();
    this._router.navigate(["/Home"])
  },
  error:(error)=>{
    this.isLoading=false;
    this.errorMessage=error.error.message;
    console.log(error);
  }
})
}

removeErrorMessage(){
  this.errorMessage="";
}
}
