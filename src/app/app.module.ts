import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// import {ChartModule} from 'primeng/chart';
// import {ToastModule} from 'primeng/toast';
// import {TabViewModule} from 'primeng/tabview';
// import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MainModule

    // ChartModule,
    // ToastModule,
    // TabViewModule,
    // CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
