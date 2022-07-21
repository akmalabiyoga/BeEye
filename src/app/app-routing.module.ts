import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { Dashboard2Component } from './main/dashboard2/dashboard2.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",component:MainComponent,children: [
    {path:"",component:DashboardComponent},
    {path:"dashboard2",component:Dashboard2Component}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
