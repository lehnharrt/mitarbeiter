import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeLiComponent } from './employee-li/employee-li.component';
//import { AppRoutingModule } from './app-routing.module'; Sobald es koimplexer wird macht das auslagern in eine separate Datei Sinn
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:mnr', component: EmployeeDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeLiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, 
      {enableTracing: true}
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
