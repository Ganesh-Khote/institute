import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReviewComponent } from './review/review.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatWeOfferComponent,
    AboutUsComponent,
    ReviewComponent,
    CoursesComponent,
    FooterComponent,
    ContactusComponent,
    HomeComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
