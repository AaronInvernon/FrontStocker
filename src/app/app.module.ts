import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { ClientsPage } from './pages/clients/clients.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { OrdersPage } from './pages/orders/orders.page';
import { BillsPage } from './pages/bills/bills.page';
import { ProductsPage } from './pages/products/products.page';
import { BillFormPage } from './pages/bill-form/bill-form.page';
import { ClientFormPage } from './pages/client-form/client-form.page';
import { EmployeeFormPage } from './pages/employee-form/employee-form.page';
import { OrderFormPage } from './pages/order-form/order-form.page';
import { ProductFormPage } from './pages/product-form/product-form.page';

@NgModule({
  declarations: [
    AppComponent,
    ClientsPage,
    EmployeesPage,
    OrdersPage,
    BillsPage,
    ProductsPage,
    BillFormPage,
    ClientFormPage,
    EmployeeFormPage,
    OrderFormPage,
    ProductFormPage
  ],
  entryComponents: [
    ClientsPage,
    EmployeesPage,
    OrdersPage,
    BillsPage,
    ProductsPage,
    BillFormPage,
    ClientFormPage,
    EmployeeFormPage,
    OrderFormPage,
    ProductFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
