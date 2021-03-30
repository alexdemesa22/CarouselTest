import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDeviceComponent } from './module/get-device/get-device.component';
import { HelpSupportComponent } from './module/help-support/help-support.component';
import { HomeInternetComponent } from './module/home-internet/home-internet.component';
import { HomeComponent } from './module/home/home.component';
import { MobileInternetComponent } from './module/mobile-internet/mobile-internet.component';
import { PhoneLineComponent } from './module/phone-line/phone-line.component';
import { ProductComponent } from './module/product/product.component';
import { StoreComponent } from './module/store/store.component';
import { UpgradeComponent } from './module/upgrade/upgrade.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'get-device', component: GetDeviceComponent},
  { path: 'help-support', component: HelpSupportComponent},
  { path: 'home-internet', component: HomeInternetComponent},
  { path: 'mobile-internet', component: MobileInternetComponent},
  { path: 'phone-line', component: PhoneLineComponent},
  { path: 'product', component: ProductComponent},
  { path: 'store', component: StoreComponent},
  { path: 'upgrade', component: UpgradeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
