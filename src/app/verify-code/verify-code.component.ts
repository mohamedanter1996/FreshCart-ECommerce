import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {
  errorMessage:string="";
   isLoading:boolean=false;
 constructor(private _authenticationService: AuthenticationService,private _router:Router,public _loaderService:LoaderService){}
 verifyCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.pattern(/^[0-9]{5,6}$/),Validators.required])
})
handleVerifyCodeForm(verifyCodeForm:FormGroup){
  this.isLoading=true;
  console.log(verifyCodeForm);
  this._authenticationService.getVerifyCodeUserData(verifyCodeForm.value).subscribe({
    next:(response)=>{
      this.isLoading=false;
      console.log(response);
      this._router.navigate(["/reset-password"]);
    },
    error:(error)=>{
      this.isLoading=false;
      this.errorMessage=error.error.message
      
      
      console.log(error);
    }
  })
}
}
