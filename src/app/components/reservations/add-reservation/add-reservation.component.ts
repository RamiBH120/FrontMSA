import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  form!: FormGroup

  constructor(private reservationService: ReservationService,private router:Router) {
  }

  ngOnInit() {

    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      nomR: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      commentR: new FormControl('', [Validators.required, Validators.minLength(3)]),
      date: new FormControl('', Validators.required),
    })
  }




  add() {
    this.reservationService.addReservation(this.form.getRawValue()).subscribe(() => {
      console.log()
      alert("Reservation ajouté avec succès.")
      this.router.navigate(['/home/reservations'])
    })
  }

}
