import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MobileLinksComponent } from './components/mobile-links/mobile-links.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    MobileHeaderComponent,
    MobileLinksComponent,
    MobileMenuComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, NgOptimizedImage],
  exports: [MobileMenuComponent],
})
export class MobileModule {}
