import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './module/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
