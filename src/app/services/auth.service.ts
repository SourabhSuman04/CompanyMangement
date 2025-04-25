import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../envernment/environment';
import { ApiResponse } from '../helper/apiresponse';
import { SignInModel } from '../model/signin-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Signin(model: any) {
    return this.http.post<ApiResponse<SignInModel>>(environment.baseurl + `Auth/signin`, model);
  }
}
