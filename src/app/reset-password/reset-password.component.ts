import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
 isLoading:boolean=false;
   messageType:string="";
  statusMessage:string="";
  constructor(private _authenticationService: AuthenticationService,private _router:Router,public _loaderService:LoaderService){}
  resetPasswordForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9!@#$_.]{6,16}$'),Validators.required,Validators.minLength(6),Validators.maxLength(16)])
  })

  handleResetPasswordForm(resetPasswordForm:FormGroup){
    this.isLoading=true;
console.log(resetPasswordForm);
this._authenticationService.getResetPasswordUserData(resetPasswordForm.value).subscribe({
  next:(response)=>{
    this.isLoading=false;
    this.statusMessage="new password Updated successfully"
    this._router.navigate(["/logIn"])
    console.log(response);
  },
  error:(error)=>{
    this.isLoading=false;
     this.messageType=error.error.statusMsg;
    this.statusMessage=error.error.message;
    console.log(error);
  }
})
  }

  removeStatusMessage(){
     this.statusMessage="";
  }

}
