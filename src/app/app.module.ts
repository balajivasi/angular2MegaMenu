import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderPanel } from './header';
import { HeaderLeftPanelComponent } from './header/leftPanel';
import { HeaderRightPanelComponent } from './header/rightPanel'

import { Navigation } from './navigation';
import { logoComponent } from './navigation/logo';
import { FooterComponent } from './footer'
import { routing } from './app.router'

import { HomePageComponent } from './homePage'
import { BusinessPageModule } from './businessPage/businessPage.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderPanel,
    HeaderLeftPanelComponent,
    HeaderRightPanelComponent,
    Navigation,
    logoComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    routing,
    BusinessPageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
