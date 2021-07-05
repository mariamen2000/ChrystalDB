import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./components/dashboard/sales/sales.module').then(m => m.SalesModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./components/dashboard/finance/finance.module').then(m => m.FinanceModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./components/dashboard/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./components/dashboard/inventory/inventory.module').then(m => m.InventoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
