import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlockSlideshowComponent } from './block-slideshow/block-slideshow.component';
import { BlockFeaturesComponent } from './block-features/block-features.component';
import { MaterialModule } from '../material/material.module';
import { BlockProductsCarouselComponent } from './block-products-carousel/block-products-carousel.component';
import { SharedModule } from '../../shared/shared.module';
import { BlockBannerComponent } from './block-banner/block-banner.component';
import { BlockProductsComponent } from './block-products/block-products.component';

@NgModule({
  declarations: [
    BlockSlideshowComponent,
    BlockFeaturesComponent,
    BlockProductsCarouselComponent,
    BlockBannerComponent,
    BlockProductsComponent,
  ],
  imports: [CommonModule, NgOptimizedImage, MaterialModule, SharedModule],
  exports: [
    BlockFeaturesComponent,
    BlockSlideshowComponent,
    BlockProductsCarouselComponent,
    BlockBannerComponent,
    BlockProductsComponent,
  ],
})
export class BlocksModule {}
