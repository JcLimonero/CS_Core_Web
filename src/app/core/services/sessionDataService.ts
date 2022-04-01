import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AppSettings } from '../../settings';
import { CookieService } from 'ngx-cookie-service';

 @Injectable({
  providedIn: 'root'
})
export class SessionDataService {
  
  getTokenValue(): string | string[] {
    let token = this.cookieService.get(AppSettings.tokenAuthName);
    return token;
  }

  constructor(private  cookieService: CookieService) {  }


  createAuthToken(token: any)
  {
    this.cookieService.set(AppSettings.tokenAuthName,token);

    var decoded = jwt_decode(token);
    console.log(decoded);
  }

  getRole()
  {
    if (this.existAuthtoken())
    {
      let token = this.cookieService.get(AppSettings.tokenAuthName);

      if (token)
      {
        var decoded: any = jwt_decode(token);
        return decoded.IdRole;
      }
    }
    return undefined;
  }

  getCurrentUser(){
    if (this.existAuthtoken())
    {
      let token = this.cookieService.get(AppSettings.tokenAuthName);

      if (token)
      {
        var decoded: any = jwt_decode(token);
        console.log(decoded);
        return decoded.Name;
      }
    }
    return undefined;
  }

  removeToken()
  {
      this.cookieService.delete(AppSettings.tokenAuthName);
  }
/* 
  getLastUserLoggedGlobalId() : string
  {
    if (this.existAuthtoken())
    {
      let token = Cookies.get(AppSettings.tokenAuthName);

      if (token)
      {
        var decoded = jwt_decode(token);
        
      }
    }
    return undefined;
  } */

  
  existAuthtoken()
  {
    let token = this.cookieService.get(AppSettings.tokenAuthName);
    console.log(token);

    if (token)
    {
        var decoded: any = jwt_decode(token);

      if (Date.now() >= decoded.exp * 1000)
        return false
      return true;
    }
    return false;
  }


}