import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/models/offre/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private url = 'http://localhost:8282/api/offres';

  constructor(private http:HttpClient) { }

  getAllOffre():Observable<Offre[]>{
    return this.http.get<Offre[]>(this.url, { withCredentials: true });
  }

  getOffre(id:number):Observable<Offre>{
    return this.http.get<Offre>(this.url+'/'+id);
  }

  addOffre(a:Offre):Observable<Offre>{
    return this.http.post<Offre>(this.url,a);
  }

  updateOffre(id:number,a:Offre):Observable<Offre>{
    return this.http.put<Offre>(this.url,a);
  }

  deleteOffre(id:number):Observable<string>{
    return this.http.delete<string>(this.url+'/'+id);
  }
}
