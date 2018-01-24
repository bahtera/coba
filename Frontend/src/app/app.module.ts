import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DenimComponent } from './denim/denim.component';
import { DetailComponent } from './detail/detail.component';
import { FootwearComponent } from './footwear/footwear.component';
import { JeansComponent } from './jeans/jeans.component';
import { OuterwearComponent } from './outerwear/outerwear.component';
import { PantsComponent } from './pants/pants.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { ShortsComponent } from './shorts/shorts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccessoriesComponent,
    DenimComponent,
    DetailComponent,
    FootwearComponent,
    JeansComponent,
    OuterwearComponent,
    PantsComponent,
    ShirtsComponent,
    TShirtsComponent,
    ShortsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, HttpModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'accessories', component : AccessoriesComponent },
      { path : 'denim', component : DenimComponent },
      { path : 'footwear', component : FootwearComponent },
      { path : 'jeans', component : JeansComponent },
      { path : 'outerwear', component : OuterwearComponent },
      { path : 'pants', component : PantsComponent },
      { path : 'shirts', component : ShirtsComponent },
      { path : 't-shirts', component : TShirtsComponent },
      { path : 'shorts', component : ShortsComponent },
      { path : 'detail/:id', component : DetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
