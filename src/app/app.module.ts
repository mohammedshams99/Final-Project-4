import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUi/navbar/navbar.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NotFoundComponent } from './sharedUi/not-found/not-found.component';
import { ListEmpComponent } from './Employees/list-emp/list-emp.component';
import { AddEmpComponent } from './Employees/add-emp/add-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateEmpComponent } from './Employees/update-emp/update-emp.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ListEmpComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    ListClientComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
