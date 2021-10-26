import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionsService } from 'src/app/shared/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent {

  allData : [];

  constructor(private serv : EmployeeService ,  private router : Router) { 
    this.serv.get().subscribe((data : any) => {
      this.allData = data
    })
  }

  remove(id){
    this.serv.delete(id).subscribe((data : any) => {
      window.location.reload();
  })
}
     
 

}
