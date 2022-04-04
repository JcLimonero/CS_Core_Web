import { Component, OnInit } from '@angular/core';
import { SessionDataService } from 'src/app/core/services/sessionDataService';
import { AuthenticationService } from '../../../../core/services/auth.service';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  fullName: string = "";
  email: string = "";
  alias: string = "";

  constructor(private authService: AuthenticationService,private sessionDataService: SessionDataService) { }

  ngOnInit() {
    this.fullName = this.sessionDataService.getCurrentUser(); 
    this.email = this.sessionDataService.getMail();
  }

}
