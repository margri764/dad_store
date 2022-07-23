import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './pages/contact-us/contact-us/contact-us.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { HeaderComponent } from './pages/header/header/header.component';
import { InvoiceComponent } from './pages/invoice/invoice/invoice.component';
import { Page404Component } from './pages/page404/page404/page404.component';
import { SearchComponent } from './pages/search/search/search.component';
import { SliderComponent } from './pages/slider/slider/slider.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    InvoiceComponent,
    Page404Component,
    SearchComponent,
    SliderComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],

  exports:[
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    InvoiceComponent,
    Page404Component,
    SearchComponent,
    SliderComponent
  ]
})

export class SharedModule { }
