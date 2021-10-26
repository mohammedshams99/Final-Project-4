import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { ApiFunctionsService } from 'src/app/shared/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  id;
  object = new Employee;
  constructor(private serv : EmployeeService, private router : Router ,
     private activeRoute : ActivatedRoute) {
      this.id = this.activeRoute.snapshot.paramMap.get('id')
      this.serv.getById(this.id).subscribe((data:any) =>{
       this.object = data;
      })
      }

  ngOnInit(): void {

  }
  update(){
    this.serv.put(this.object , this.id).subscribe((data:any) =>{
      this.router.navigateByUrl('listEmp')
    })
  }


}
