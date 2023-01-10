import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProductComponent } from './pages/page-product/page-product.component';

const routes: Routes = [
  { path: 'products/:productSlug', component: PageProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
