import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, ScullyLibModule],
	providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
