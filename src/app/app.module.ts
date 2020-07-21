import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ClientsPage } from './pages/clients/clients.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { OrdersPage } from './pages/orders/orders.page';
import { BillsPage } from './pages/bills/bills.page';
import { ProductsPage } from './pages/products/products.page';

@NgModule({
  declarations: [
    AppComponent,
    ClientsPage,
    EmployeesPage,
    OrdersPage,
    BillsPage,
    ProductsPage
  ],
  entryComponents: [
    ClientsPage,
    EmployeesPage,
    OrdersPage,
    BillsPage,
    ProductsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
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
