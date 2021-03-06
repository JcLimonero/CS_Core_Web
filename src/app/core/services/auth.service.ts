import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
import { of, EMPTY } from 'rxjs';
import { AppSettings } from 'src/app/settings';
import { SessionDataService } from './sessionDataService';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private url: string = AppSettings.URIAccessAutentication;


    constructor(
        private http: HttpClient,        
        private sessionDataService: SessionDataService
    ) {}

    login(email: string, password: string) {
        
         return this.http.post(this.url + "/ValidateCredentials", {Mail: email, Password:password},{responseType: 'text'});
        
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.sessionDataService.removeToken();
    }

    getCurrentUser(): any {
        // TODO: Enable after implementation
        // return JSON.parse(this.localStorage.getItem('currentUser'));
        return {
            token: 'aisdnaksjdn,axmnczm',
            isAdmin: true,
            email: 'john.doe@gmail.com',
            id: '12312323232',
            alias: 'john.doe@gmail.com'.split('@')[0],
            expiration: moment().add(1, 'days').toDate(),
            fullName: 'John Doe'
        };
    }

    passwordResetRequest(email: string) {
        return of(true).pipe(delay(1000));
    }

    changePassword(currentPwd: string, newPwd: string) {
        return this.http.post(this.url + "/UpdatePassword", {currentPwd: currentPwd, newPwd:newPwd},{responseType: 'text'});
    }

    passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
        return of(true).pipe(delay(1000));
    }
}
