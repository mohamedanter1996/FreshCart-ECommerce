import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { matchpassword } from '../confermation.validator';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
errorMessage:string="";
isLoading:boolean=false;
constructor(private _authenticationService:AuthenticationService,private _router:Router){}
signUpForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9!@#$_.]{6,16}$'),Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
  rePassword:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9!@#$_.]{6,16}$'),Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
  phone:new FormControl(null,[Validators.pattern(/^(\+2){0,1}01[0125][0-9]{8}$/),Validators.required])

},
{
  validators:matchpassword
  
}
)




handleSignUpForm(signUpForm:FormGroup){
  this.isLoading=true;
  console.log(signUpForm);

this._authenticationService.getSignUpUserData(signUpForm.value).subscribe({
  next:(response)=>{
    console.log(response);
     this.isLoading=false;
   this._router.navigate(["/logIn"])
   
  },

  error:(error)=>{
    console.log(error);
 this.isLoading=false;
this.errorMessage=error.error.message;
    
  }
})
}
removeErrorMessage(){
  this.errorMessage="";
}

}
