import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';
import { ApiService } from 'src/app/core/services/api.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, AfterViewInit {

  //#region table variables
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
    public length = 10;
    public pageSize = 10;
    public pageSizeOptions = [5, 10, 20];
    public pageIndex = 1;
    public displayedColumns = [ 'name','lastName','mail','role','enable','update','delete'];


    constructor(
      private logger: NGXLogger,
      private titleService: Title,
      private api: ApiService
    ) { }


  ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator; 
  }
 
  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Users');
    this.logger.log('Users loaded');

    this.LoadData();
    }

    LoadData(){
      this.api.list("Users").subscribe( res => 
        { 
          this.dataSource.data= res.data;
          console.log(res)
        });
    }

    update(element: any) {
    }

    delete(element: any) {
    }
}
 