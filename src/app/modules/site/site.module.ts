import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';


@NgModule({
  declarations: [
    PageAboutUsComponent,
    PageContactUsComponent,
    PageFaqComponent,
    PageTermsComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
