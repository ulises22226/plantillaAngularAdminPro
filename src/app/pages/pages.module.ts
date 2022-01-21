import { Test4Component } from './test4/test4.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { Test5Component } from './test5/test5.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    PagesComponent,
    Test5Component,
  ],
  exports: [
    DashboardComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
