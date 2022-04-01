import { Component, OnInit } from '@angular/core';
//import { CommunicationService } from '../../../shared/services/communication.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageInfo: any;

  constructor(/* private communication: CommunicationService */) { }

  ngOnInit(): void {
    this.pageInfo = {
      title: 'Loading...',
      breadcrumb: {
        main: 'Principal',
        mainUrl:'/app/dashboard',
        first: 'Loading...',
        firstUrl:'/app/dashboard',
        second: 'Loading...'
      }
    };
/*     this.communication.changeEmitted$.subscribe(data => {
      if (data.type === 'content') {
        if(!data.breadcrumb.main)
        {
          data.breadcrumb.main = 'Principal';
          data.breadcrumb.mainUrl = '/app/dashboard';
        }
        this.pageInfo = data;
      }
    }); */
  }

}
