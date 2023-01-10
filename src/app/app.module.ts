import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { RootComponent } from './components/root/root.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgOptimizedImage } from '@angular/common';

// ANGULAR MATERIAL IMPORT
import { MaterialModule } from './modules/material/material.module';
// MODULES
import { MobileModule } from './modules/mobile/mobile.module';
import { FooterModule } from './modules/footer/footer.module';
import { BlocksModule } from './modules/blocks/blocks.module';

@NgModule({
  declarations: [
    // COMPONENTS
    AppComponent,
    RootComponent,
    HomePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    // ANGULAR MATERIAL MODULE
    MaterialModule,
    // MODULES
    BlocksModule,
    FooterModule,
    MobileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
