import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre/offre.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent {
  form!: FormGroup

  constructor(private offreService: OffreService,private router:Router) {
  }

  ngOnInit() {

    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      nomOffre: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      descriptionOffre: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      typeOffre: new FormControl('', Validators.required),
    })
  }




  add() {
    this.offreService.addOffre(this.form.getRawValue()).subscribe(() => {
      console.log()
      alert("Offre ajouté avec succès.")
      this.router.navigate(['/home/offres'])
    })
  }

}
