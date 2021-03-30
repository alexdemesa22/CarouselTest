import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './module/home/home.component';
import { ProgressiveComponent } from './component/progressive/progressive.component';
import { DetailsComponent } from './module/details/details.component';
import { HomeInternetComponent } from './module/home-internet/home-internet.component';
import { GetDeviceComponent } from './module/get-device/get-device.component';
import { PhoneLineComponent } from './module/phone-line/phone-line.component';
import { MobileInternetComponent } from './module/mobile-internet/mobile-internet.component';
import { UpgradeComponent } from './module/upgrade/upgrade.component';
import { StoreComponent } from './module/store/store.component';
import { ProductComponent } from './module/product/product.component';
import { HelpSupportComponent } from './module/help-support/help-support.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    HomeComponent,
    ProgressiveComponent,
    DetailsComponent,
    HomeInternetComponent,
    GetDeviceComponent,
    PhoneLineComponent,
    MobileInternetComponent,
    UpgradeComponent,
    StoreComponent,
    ProductComponent,
    HelpSupportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
