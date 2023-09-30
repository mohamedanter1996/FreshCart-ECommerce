import { UserResetPasswordData } from './user-reset-password-data';
import { UserForgetPasswordData } from './user-forget-password-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserVerifyCodeData} from './user-verify-code-data';

import{Observable} from'rxjs';
import { UserSignUpData } from './user-sign-up-data';
import { UserSignInData } from './user-sign-in-data';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient:HttpClient) { }
getSignUpUserData(userSignUpData:UserSignUpData):Observable<any>
{return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",userSignUpData)}

getSignInUserData(userSignUpData:UserSignInData):Observable<any>
{return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",userSignUpData)}

getForgetPasswordUserData(userForgetPasswordData:UserForgetPasswordData):Observable<any>
{return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",userForgetPasswordData)}

getVerifyCodeUserData(userVerifyCodeData:UserVerifyCodeData):Observable<any>
{return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",userVerifyCodeData)}

getResetPasswordUserData(userResetPasswordData:UserResetPasswordData):Observable<any>
{return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",userResetPasswordData)}
}
