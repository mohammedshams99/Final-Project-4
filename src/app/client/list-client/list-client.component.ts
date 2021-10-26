import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {

  allData : [];

  constructor(private serv : ClientService ,  private router : Router) { 
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
