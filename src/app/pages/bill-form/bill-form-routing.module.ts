import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillFormPage } from './bill-form.page';

const routes: Routes = [
  {
    path: '',
    component: BillFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillFormPageRoutingModule {}
