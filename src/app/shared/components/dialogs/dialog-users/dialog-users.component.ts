import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.services';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-dialog-users',
  templateUrl: './dialog-users.component.html',
  styleUrls: ['./dialog-users.component.css']
})
export class DialogUsersComponent implements OnInit {

  title:any="Editar Usuario";
  generalForm: FormGroup;  
  dataForm:any;
  rolesCatalog:any;
  idUser:any;
  
  constructor(
    public dialogRef: MatDialogRef<DialogUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private api: ApiService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.dataForm = this.data.data;
  
    this.createForm();
    this.loadCatalogs();

    if(this.data.data == null)
      this.title = "Agregar Usuario";
    else
    {
      this.title = "Editar Usuario";
      this.idUser = this.data.data.id;
    }      

    this.setFormValues();
  }

  createForm(){
    this.generalForm = this.formBuilder.group({
      id: new FormControl({ value: "" }),
      name: new FormControl({ value: "" }, [Validators.required]),
      last_name: new FormControl({ value: "" },),
      email: new FormControl({ value: "" }, [Validators.required,Validators.email]),
      enable: new FormControl({ value: true }, [Validators.required]),
      role: new FormControl(1)

    });
  }

  setFormValues(){    
    if(this.dataForm != undefined)
    {
      this.generalForm.get('name').setValue(this.dataForm.name);
      this.generalForm.get('id').setValue(this.dataForm.id);
      this.generalForm.get('last_name').setValue(this.dataForm.lastName);
      this.generalForm.get('email').setValue(this.dataForm.mail);
      this.generalForm.get('enable').setValue(this.dataForm.enable);
      this.generalForm.get('role').setValue(this.dataForm.idRole);
    }
    else{
      this.generalForm.get('name').setValue("");
      this.generalForm.get('id').setValue("");
      this.generalForm.get('last_name').setValue("");
      this.generalForm.get('email').setValue("");
      this.generalForm.get('enable').setValue(false);
      this.generalForm.get('role').setValue(3);
    }
  }

  loadCatalogs(){
    this.api.list("role").subscribe(res => {
      this.rolesCatalog= res.data;
    });
  }
  
  onDismiss(): void {
    this.dialogRef.close(false);
  }

  SaveData(){
    var params = {
      name:this.generalForm.get('name').value,
      last_name:this.generalForm.get('last_name').value,
      email:this.generalForm.get('email').value,
      enable:this.generalForm.get('enable').value,
      idRole: this.generalForm.get('role').value
    }
    
    if(this.dataForm != undefined)
      this.updateUser(params);
    else
      this.createUser(params);
  }

  createUser(params){
    this.api.create("Users",params).subscribe(res =>{
      this.notificationService.OkSnackBar("Usuario creado correctamente");
      this.dialogRef.close(true);
    },error=>{
      this.notificationService.errorSnackBar("Usuario no pudo ser creado correctamente: " + error);
      console.error(error);
    });
  }

  updateUser(params){
    this.api.update("Users",this.idUser,params).subscribe(res =>{
      this.notificationService.OkSnackBar("Usuario actualizado correctamente");
      this.dialogRef.close(true);
    },error=>{
      this.notificationService.errorSnackBar("Usuario no pudo ser actualizado correctamente: "+ error);
      console.error(error);
    });
  }

}
