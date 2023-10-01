import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogIn:boolean=false;
constructor(private _authenticationService:AuthenticationService,private _router:Router){}
ngOnInit(): void {
    this._authenticationService.userData.subscribe({
      next:(userDataValue)=>{
if(userDataValue==null){
  this.isLogIn=false;
}
else{
  this.isLogIn=true;
}
      }
    })
}
logout(){
  localStorage.removeItem("token");
  this._authenticationService.userData.next(null);
this._router.navigate(["/logIn"]);
}
}
