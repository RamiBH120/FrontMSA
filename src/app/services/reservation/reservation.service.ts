import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private url = 'http://localhost:8080/reservation';

  constructor(private http:HttpClient) { }

  getAllReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.url);
  }

  getReservation(id:number):Observable<Reservation>{
    return this.http.get<Reservation>(this.url+'/'+id);
  }

  addReservation(a:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(this.url,a);
  }

  updateReservation(id:number,a:Reservation):Observable<Reservation>{
    return this.http.put<Reservation>(this.url + '/'+id ,a);
  }

  deleteReservation(id:number):Observable<string>{
    return this.http.delete<string>(this.url+'/'+id);
  }
}
