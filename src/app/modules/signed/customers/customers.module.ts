import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../../../shared/modules/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    MatCardModule
  ],
  declarations: [
    CustomerListComponent
  ],
  entryComponents: [
  ]
})
export class CustomersModule { }
