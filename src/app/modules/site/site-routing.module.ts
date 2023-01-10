import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contact-us' },
  { path: 'about-us', component: PageAboutUsComponent },
  { path: 'contact-us', component: PageContactUsComponent },
  { path: 'faq', component: PageFaqComponent },
  { path: 'terms', component: PageTermsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
