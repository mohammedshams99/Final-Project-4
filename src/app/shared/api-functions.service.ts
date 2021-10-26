import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<T> {

  constructor(@Inject(String) public configUrl : string ,public http : HttpClient) { }

  get(): Observable<T>{
    return this.http.get<T>(this.configUrl);
  }

  getById(id): Observable<T>{
    return this.http.get<T>(this.configUrl + `/${id}`);
  }

  post(object): Observable<T>{
    return this.http.post<T>(this.configUrl , object )
  }
  put(object , id){
    return this.http.put<T>(this.configUrl + `/${id}` , object )
  }
  
  delete(id): Observable<T>{
    return this.http.delete<T>(this.configUrl + `/${id}`)
  }

}
