import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from '../modules/material/material.module';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductCardComponent, ProductComponent],
  imports: [CommonModule, RouterModule, MaterialModule, NgOptimizedImage],
  exports: [ProductCardComponent, ProductComponent],
})
export class SharedModule {}
