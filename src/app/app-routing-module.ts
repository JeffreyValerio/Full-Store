import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'site',
        loadChildren: () =>
          import('./modules/site/site.module').then((m) => m.SiteModule),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./modules/shop/shop.module').then((m) => m.ShopModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
