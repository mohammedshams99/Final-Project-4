import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { AddEmpComponent } from './Employees/add-emp/add-emp.component';
import { ListEmpComponent } from './Employees/list-emp/list-emp.component';
import { UpdateEmpComponent } from './Employees/update-emp/update-emp.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NotFoundComponent } from './sharedUi/not-found/not-found.component';


const routes: Routes = [
   {path : "home" , component : HomeComponent},
   {path : "" , component : HomeComponent},
   {path : "addEmp" , component : AddEmpComponent},
   {path : "listEmp" , component : ListEmpComponent},
   {path : "update/:id" , component : UpdateEmpComponent},
   {path : "addClient" , component : AddClientComponent},
   {path : "listClient" , component : ListClientComponent},
   {path : "updateC/:id" , component : UpdateClientComponent},
   {path : "**" , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
