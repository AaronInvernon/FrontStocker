import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ClientsPageModule } from './pages/clients/clients.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./pages/bills/bills.module').then( m => m.BillsPageModule)
  },
  {
    path: 'clients/add',
    loadChildren: () => import('./pages/client-form/client-form.module').then( m => m.ClientFormPageModule)
  },
  {
    path: 'bills/add',
    loadChildren: () => import('./pages/bill-form/bill-form.module').then( m => m.BillFormPageModule)
  },
  {
    path: 'employees/add',
    loadChildren: () => import('./pages/employee-form/employee-form.module').then( m => m.EmployeeFormPageModule)
  },
  {
    path: 'orders/add',
    loadChildren: () => import('./pages/order-form/order-form.module').then( m => m.OrderFormPageModule)
  },
  {
    path: 'products/add',
    loadChildren: () => import('./pages/product-form/product-form.module').then( m => m.ProductFormPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
