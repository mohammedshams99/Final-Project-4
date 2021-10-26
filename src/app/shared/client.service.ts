import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Models/client';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ApiFunctionsService<Client>{

  constructor(http : HttpClient) {
    super("http://localhost:3000/client",http)
   }
}
