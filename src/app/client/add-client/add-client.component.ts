import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  object = new Client;
  constructor(private serv : ClientService, private router : Router) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe((data:any) =>{
      this.router.navigateByUrl('listClient')
    })
  }
}
