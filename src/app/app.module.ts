import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppFeaturesModule } from './app-features-module/app-features-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppFeaturesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
