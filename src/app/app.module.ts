import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxGraphModule} from '@swimlane/ngx-graph/release';
import {AppService} from './app.service';

import {Http, HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import * as shape from 'd3-shape';
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
    HttpClientModule,
    HttpModule,
    BrowserModule, BrowserAnimationsModule, FormsModule, NgxChartsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
