import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';
import { SignedRoutingModule } from './signed-routing.module';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [LayoutComponent,ContentComponent],
  imports: [
    SharedModule,
    CommonModule,
    SignedRoutingModule,
    MatCardModule

  ],
  //entryComponents: [WelcomeComponent, ConfigurationComponent, ConfigUsersCreateComponent, ConfigUsersEditComponent, ConfigUsersBlockComponent, ConfigUsersUnblockComponent, ChartDialogComponent],

  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    { provide: MatFormFieldModule, useValue: { appearance: 'fill' } },
    {provide: MAT_DATE_LOCALE, useValue: 'es-MX'},
 ],
})
export class SignedModule { }
