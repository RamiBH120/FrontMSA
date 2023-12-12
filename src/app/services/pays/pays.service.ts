import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from 'src/app/models/pays/pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private url = 'http://localhost:9099/pays';

  constructor(private http:HttpClient) { }

  getAllOffre():Observable<Pays[]>{
    return this.http.get<Pays[]>(this.url);
  }

  getOffre(id:number):Observable<Pays>{
    return this.http.get<Pays>(this.url+'/'+id);
  }

  addOffre(a:Pays):Observable<Pays>{
    return this.http.post<Pays>(this.url,a);
  }

  updateOffre(id:number,a:Pays):Observable<Pays>{
    return this.http.put<Pays>(this.url + '/' + id, a);
  }

  deleteOffre(id:number):Observable<string>{
    return this.http.delete<string>(this.url+'/'+id);
  }
}
