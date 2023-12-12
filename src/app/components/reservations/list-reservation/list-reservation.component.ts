import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation/reservation';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {
  reservations: Reservation[] = [];
  filter!: string;

  constructor(private reservationService: ReservationService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations() {
    return this.reservationService.getAllReservation().subscribe((data: Reservation[]) => {
      console.log(data);
      this.reservations = data;
    });
  }

  deleteReservation(id:number) {
    return this.reservationService.deleteReservation(id).subscribe(()=>{
      alert("Reservation deleted")
      this.getAllReservations();
    });
  }

  goToUpdate(id: number) {
    this.router.navigate(['home/reservations/edit', id]);
  }
}

