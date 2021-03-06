import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs'; 

 import { AuthenticationService } from '../../../core/services/auth.service';
import { SpinnerService } from '../../../core/services/spinner.service';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { SessionDataService } from 'src/app/core/services/sessionDataService';
import { RoleAccess } from 'src/app/shared/models/role-access';
import { RoleAccessService } from 'src/app/core/services/role-access.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

    private _mobileQueryListener: () => void;
    mobileQuery: MediaQueryList;
    showSpinner: boolean = false;
    userName: string = "";
    imageProfile: string = "";
    isAdmin: boolean = false;

    private autoLogoutSubscription: Subscription = new Subscription;
    enableUsers: boolean;
    

    constructor(private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher,
        public spinnerService: SpinnerService,
        private authGuard: AuthGuard,
        private sessionDataService: SessionDataService) {

        this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
       
        let roleAccessService = new RoleAccessService();
        this.enableUsers = roleAccessService.getPermissions(this.sessionDataService.getRole(),'Users').isModuleEnabled;
        
        this.userName = this.sessionDataService.getCurrentUser();
        this.imageProfile = this.sessionDataService.getImageProfile();

        // Auto log-out subscription
        const timer$ = timer(2000, 5000);
        this.autoLogoutSubscription = timer$.subscribe(() => {
            this.authGuard.canActivate();
        });
    }

    ngOnDestroy(): void {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this.autoLogoutSubscription.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }
}
