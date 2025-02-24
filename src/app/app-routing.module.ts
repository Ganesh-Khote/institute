import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesComponent } from './courses/courses.component';
import { ReviewComponent } from './review/review.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'offer', component: WhatWeOfferComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'reviews', component: ReviewComponent },
  {path:"contactus",component:ContactusComponent},
  {path:"faq",component:FaqComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
