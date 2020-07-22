import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillFormPageRoutingModule } from './bill-form-routing.module';

import { BillFormPage } from './bill-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillFormPageRoutingModule
  ],
  declarations: [BillFormPage]
})
export class BillFormPageModule {}
