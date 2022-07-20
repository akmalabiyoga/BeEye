import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainNavComponent
  ]
})
export class LayoutsModule { }
