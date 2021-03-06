import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';
import { ApiService } from 'src/app/core/services/api.services';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RoleAccessService } from 'src/app/core/services/role-access.service';
import { SessionDataService } from 'src/app/core/services/sessionDataService';
import { ConfirmDialogComponent } from 'src/app/shared/components/dialogs/confirm-dialog/confirm-dialog.component';
import { DialogUsersComponent } from 'src/app/shared/components/dialogs/dialog-users/dialog-users.component';
import { RoleAccess } from 'src/app/shared/models/role-access';

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
    public displayedColumns = [ 'name','lastName','mail','role','enable'];
    roleAcessObject:RoleAccess;
    public filterIcon = 'search';

    constructor(
      private logger: NGXLogger,
      private titleService: Title,
      private api: ApiService,
      public dialog: MatDialog,
      private notificationService: NotificationService,
      private sessionDataService: SessionDataService
    ) { }


  ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator; 
  }
 
  ngOnInit() {
    this.SetAccess();
    this.titleService.setTitle('angular-material-template - Users');    
    this.LoadData();
    }

    LoadData(){
      this.api.list("Users").subscribe( res => 
        { 
          this.dataSource.data= res.data;
        });
    }

    SetAccess(){
      let roleAccessService = new RoleAccessService();
      this.roleAcessObject = roleAccessService.getPermissions(this.sessionDataService.getRole(),'Users');
      if(this.roleAcessObject.isUpdateEnabled)
        this.displayedColumns.push('update')
      if(this.roleAcessObject.isDeleteEnabled)
        this.displayedColumns.push('delete')

    }

    create() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {title:"Crear Usuario", data:null};
      dialogConfig.disableClose = true;
      let dialogRef = this.dialog.open(DialogUsersComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(value => {
        this.LoadData();
      });
    }

    update(element: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {title:"Editar Usuario", data:element};
      dialogConfig.disableClose = true;
      let dialogRef = this.dialog.open(DialogUsersComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(value => {
        this.LoadData();
      });
    }

    delete(element: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {title:"Eliminar Usuario", message:"Esta seguro que desea eliminar el usuario: <b>"+ element.name +" "+ element.lastName + "</b>?"};
      dialogConfig.disableClose = true;
      let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(value => {
        if(value)
        {
          this.api.delete("Users",element.id).subscribe(res =>{
            this.notificationService.OkSnackBar("Usuario eliminado correctamente");
            this.LoadData();
          },error=>{
            this.notificationService.errorSnackBar("Usuario no pudo ser eliminado correctamente");
            console.error(error);
          }); 
        }      
      });     
    }

    public applyFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
      this.filterIcon = value === '' ? 'search' : 'close';      
    }
}
 