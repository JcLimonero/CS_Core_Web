import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from './custom-material.module';
import { LimitToPipe } from '../pipes/limit-to.pipe';
import { ConfirmDialogComponent } from '../components/dialogs/confirm-dialog/confirm-dialog.component';
import { LocalDatePipe } from '../pipes/local-date.pipe';
import { YesNoPipe } from '../pipes/yes-no.pipe';
import {MatCardModule} from '@angular/material/card'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortalInterceptor } from '../Interceptors/portal.interceptor';

@NgModule({
  imports: [
    RouterModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [
    ConfirmDialogComponent,    
    LimitToPipe,
    LocalDatePipe,
    YesNoPipe,
    //LayoutComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    LimitToPipe,
    ConfirmDialogComponent,
    LocalDatePipe,
    YesNoPipe,
    RouterModule,
    MatCardModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: PortalInterceptor, multi: true }]
})
export class SharedModule { }
