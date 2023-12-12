import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/models/offre/offre';
import { Site } from 'src/app/models/site/site';

@Injectable({
 providedIn: 'root'
})
export class SiteService {

  private url = 'http://localhost:9098/SiteTouristique';

  constructor(private http:HttpClient) { }

  getAllSites():Observable<Site[]>{
    return this.http.get<Site[]>(this.url);
  }

  getSite(id:number):Observable<Site>{
    return this.http.get<Site>(this.url+'/'+id);
  }

  addSite(a:Site):Observable<Site>{
    return this.http.post<Site>(this.url,a);
  }

  updateSite(id:number,s:Site):Observable<Site>{
    return this.http.put<Site>(this.url+'/'+id,s);
  }

  deleteSite(id:number):Observable<string>{
    return this.http.delete<string>(this.url+'/'+id);
  }
}
