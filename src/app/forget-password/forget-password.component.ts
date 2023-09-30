import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  messageType:string="";
  statusMessage:string="";
  isLoading:boolean=false;
  constructor(private _authenticationService: AuthenticationService,private _router:Router){}
forgetPasswordForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required])
})

handleForgetPasswordForm(forgetPasswordForm:FormGroup){
   this.isLoading=true;
console.log(forgetPasswordForm);
this._authenticationService.getForgetPasswordUserData(forgetPasswordForm.value).subscribe({
  next:(response)=>{
     this.isLoading=false;
    console.log(response);
    this.messageType=response.statusMsg;
    this.statusMessage=response.message;
    this._router.navigate(["./verify-code"])


  },
  error:(error)=>{
    this.isLoading=false;
    console.log(error);
    this.messageType=error.error.statusMsg;
    this.statusMessage=error.error.message;
  }
})
}
removeStatusMessage(){
  this.statusMessage="";
}
}
