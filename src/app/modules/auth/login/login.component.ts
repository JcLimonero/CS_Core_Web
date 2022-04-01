import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AuthenticationService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { SessionDataService } from 'src/app/core/services/sessionDataService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    loading!: boolean;
    Company_name:string ="Costumer Solutions";

    constructor(private router: Router,
        private titleService: Title,
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService,
        private sessionDataService: SessionDataService) {
    }

    ngOnInit() {
        this.titleService.setTitle('angular-material-template - Login');
        this.authenticationService.logout();
        this.createForm();
    }

    private createForm() {
        const savedUserEmail = localStorage.getItem('savedUserEmail');

        this.loginForm = new FormGroup({
            email: new FormControl(savedUserEmail, [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            rememberMe: new FormControl(savedUserEmail !== null)
        });
    }

    login() {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        const rememberMe = this.loginForm.get('rememberMe')?.value;
        this.loading = true;
        this.authenticationService.login(email.toLowerCase(), password).subscribe(data => {
            this.sessionDataService.createAuthToken(data);
            this.router.navigate(['/app']);
        },error=>{
            console.error(error)
            this.notificationService.errorSnackBar(error.error);
                    this.loading = false;
        });
        this.loading = false;
    }

    resetPassword() {
        this.router.navigate(['/auth/password-reset-request']);
    }

    
  getUrl() {
    return "url('./assets/images/login_back.jpg')";
  }

}
