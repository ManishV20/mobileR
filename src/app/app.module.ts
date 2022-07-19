import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SellingComponent } from './components/selling/selling.component';
import { RepairSmartPhoneComponent } from './components/repair-smart-phone/repair-smart-phone.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupUpPageComponent,
    //HomeComponent,
    PurchaseComponent,
    SellingComponent,
    RepairSmartPhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
//    MatDialog,
    FormsModule,
//    FormBuilder,
    ReactiveFormsModule,
    //MatIconModule

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
