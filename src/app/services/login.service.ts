import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBankUser } from "../../../Models/IBankUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'https://localhost:44340/api/Login/';

  constructor(private http: HttpClient) { }

  loginMethod(username:string, password:string): any {

    // console.log(username)
    // console.log(password)

    return this.http.get(this.loginUrl + "LoginBankUser?username=" + username
    + "&password=" + password,
    
    {responseType: 'text'}
    
    )

          
      }

}
