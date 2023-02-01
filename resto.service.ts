import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Res } from './res';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http:HttpClient) { }

  getdata():Observable<Res[]>{
    return this.http.get<Res[]>("http://localhost:3000/users");
  }

  postdata(record:Res):Observable<Res>{
    return this.http.post<Res>("http://localhost:3000/users",record);
  }

  getbyid(id:number):Observable<Res>{
     return this.http.get<Res>(`http://localhost:3000/users/${id}`);
  }

  updatedata(record:Res):Observable<Res>{
    return this.http.put<Res>(`http://localhost:3000/users/${record.id}`,record);
  }

  deletedata(id:number){
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
