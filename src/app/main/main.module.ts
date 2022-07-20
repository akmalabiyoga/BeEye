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



@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutsModule,

    ChartModule,
    ToastModule,
    TabViewModule,
    CalendarModule
  ]
})
export class MainModule { }
