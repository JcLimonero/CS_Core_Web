import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as moment from 'moment';

import { AuthenticationService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { SessionDataService } from '../services/sessionDataService';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private notificationService: NotificationService,
        private authService: AuthenticationService,
        private sessionDataService: SessionDataService) { }

    canActivate() {
         
     /*   const user = this.authService.getCurrentUser();
        if(!this.sessionDataService.existAuthtoken())
        {
            this.notificationService.openSnackBar('Tu sesion ha terminado');
            this.router.navigate(['auth/login']);
            return false;
        }

        if (user && user.expiration) {

            if (moment() < moment(user.expiration)) {
                return true;
            } else {
                this.notificationService.openSnackBar('Your session has expired');
                this.router.navigate(['auth/login']);
                return false;
            }
        }

        this.router.navigate(['auth/login']);
        return false; */
        return true;
    }
}
