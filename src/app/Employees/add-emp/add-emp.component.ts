import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { ApiFunctionsService } from 'src/app/shared/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  object = new Employee;
  constructor(private serv : EmployeeService, private router : Router) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe((data:any) =>{
      this.router.navigateByUrl('listEmp')
    })
  }

}
