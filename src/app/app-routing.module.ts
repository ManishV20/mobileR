import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { RepairSmartPhoneComponent } from './components/repair-smart-phone/repair-smart-phone.component';
import { SellingComponent } from './components/selling/selling.component';
import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component: LoginPageComponent},
  {path:"signUp", component: SignupUpPageComponent},
  //{path:"home", component: HomeComponent},
  { path: 'homes', loadChildren: () => import('./components/homes/homes.module').then(m => m.HomesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
