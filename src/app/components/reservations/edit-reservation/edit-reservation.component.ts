import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation/reservation';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent {
  form!: FormGroup;
  reservation!:Reservation;

  constructor(private reservationService: ReservationService,
              private router:Router,
              private route:ActivatedRoute) {
  }

  ngOnInit() {

    this.initForm()
    this.getById(Number(this.route.snapshot.paramMap.get('id')));
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      nomR: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      commentR: new FormControl('', [Validators.required, Validators.minLength(3)]),
      date: new FormControl('', Validators.required),
    })
  }


  getById(id:number){
    this.reservationService.getReservation(id).subscribe(value => {
      console.log(value)
      this.reservation=value;
      this.form.patchValue(this.reservation);
    })
  }

  edit() {
    this.reservationService.updateReservation(this.form.get('id')?.value, this.form.getRawValue()).subscribe(value => {
      console.log(value)
      alert("Reservation Modifié avec succès.")
      this.router.navigate(['/home/reservations'])
    })
  }
}
