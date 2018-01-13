import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxGraphModule} from '@swimlane/ngx-graph/release';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { GraphMainComponent } from './components/graph-main/graph-main.component';
@NgModule({
  declarations: [
    AppComponent,
    GraphMainComponent
  ],
  imports: [
    BrowserModule,
    NgxGraphModule,
    BrowserModule, BrowserAnimationsModule, FormsModule, NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
