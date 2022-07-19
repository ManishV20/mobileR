import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from '../purchase/purchase.component';
import { RepairSmartPhoneComponent } from '../repair-smart-phone/repair-smart-phone.component';
import { SellingComponent } from '../selling/selling.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"repair_smart_phone", pathMatch:"full"},
  {path:"home", component: HomeComponent},


  {path:"purchase", component: PurchaseComponent},
  {path:"selling", component: SellingComponent},
  {path:"repair_smart_phone", component: RepairSmartPhoneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomesRoutingModule { }
