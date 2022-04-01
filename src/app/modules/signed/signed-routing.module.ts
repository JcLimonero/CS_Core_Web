import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersRoutingModule } from './customers/customers-routing.module';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,  children: [
      {
        path: '', redirectTo: 'dashboard'
      },
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mode => mode.DashboardModule)
      },
      {      
        path: 'customers', loadChildren: () => import('./customers/customers.module').then(mode => mode.CustomersModule)
      },
      {      
        path: 'account', loadChildren: () => import('./account/account.module').then(mode => mode.AccountModule)
      },

      {      
        path: 'users', loadChildren: () => import('./users/users.module').then(mode => mode.UsersModule)
      },

      {      
        path: 'about', loadChildren: () => import('./about/about.module').then(mode => mode.AboutModule)
      },
    

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignedRoutingModule { }
