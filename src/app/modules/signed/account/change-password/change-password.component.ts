import { NotificationService } from '../../../../core/services/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../../core/services/spinner.service';
import { SessionDataService } from 'src/app/core/services/sessionDataService';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form!: FormGroup;
  hideCurrentPassword: boolean;
  hideNewPassword: boolean;
  currentPassword!: string;
  newPassword!: string;
  newPasswordConfirm!: string;
  disableSubmit!: boolean;

  constructor(
    private spinnerService: SpinnerService,
    private sessionDataService: SessionDataService,    
    private authService: AuthenticationService,    
    private notificationService: NotificationService) {

    this.hideCurrentPassword = true;
    this.hideNewPassword = true;
  }

  ngOnInit() {
    this.form = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      newPasswordConfirm: new FormControl('', Validators.required),
    });

    this.form.get('currentPassword')?.valueChanges.subscribe(val => { this.currentPassword = val; });

    this.form.get('newPassword')?.valueChanges.subscribe(val => { this.newPassword = val; });

    this.form.get('newPasswordConfirm')?.valueChanges.subscribe(val => { this.newPasswordConfirm = val; });

    this.spinnerService.visibility.subscribe((value) => {
      this.disableSubmit = value;
    });    
  }

  changePassword() {

    if (this.newPassword !== this.newPasswordConfirm) {
      this.notificationService.errorSnackBar('Los password no coinciden.');
      return;
    }

    this.authService.changePassword(this.form.get("currentPassword").value,this.form.get("newPasswordConfirm").value).subscribe(res =>{
      this.notificationService.OkSnackBar("Contraseña actualizada correctamente");
      this.form.get('currentPassword').setValue("");

      this.form.get('newPassword').setValue("");
  
      this.form.get('newPasswordConfirm').setValue("");
  
    },error=>{
      this.notificationService.errorSnackBar("Constraseña no se pudo actualizar: "+ error.error );
      console.error(error.error);
    }); 
    }
}
