import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    Dashboard2Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutsModule,
    HttpClientModule,
    AppRoutingModule,

    ChartModule,
    ToastModule,
    TabViewModule,
    CalendarModule,
    TableModule,
    TooltipModule
  ]
})
export class MainModule { }
