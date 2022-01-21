import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';

const routes: Routes = [
    {
      path: 'dashboard', 
      component: PagesComponent,
      children: [
        {path: '', component: DashboardComponent},
        {path: 'test1', component: Test1Component},
        {path: 'test2', component: Test2Component},
        {path: 'test3', component: Test3Component},
        {path: 'test4', component: Test4Component},
        {path: 'test5', component: Test5Component},
        // {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}; 

