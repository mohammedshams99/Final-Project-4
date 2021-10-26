import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  id;
  object = new Client;
  constructor(private serv : ClientService, private router : Router ,
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
      this.router.navigateByUrl('listClient')
    })
  }

}
