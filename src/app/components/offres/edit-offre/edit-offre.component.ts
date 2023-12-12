import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/models/offre/offre';
import { OffreService } from 'src/app/services/offre/offre.service';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.css']
})
export class EditOffreComponent {
  form!: FormGroup
  offre!:Offre;

  constructor(private offreService: OffreService,
              private router:Router,
              private route:ActivatedRoute) {
  }

  ngOnInit() {

    this.initForm()
    this.getById(Number(this.route.snapshot.paramMap.get('id')));
  }

  initForm() {
    this.form = new FormGroup({
      nomOffre: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      descriptionOffre: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      typeOffre: new FormControl('', Validators.required),
    })
  }


  getById(id:number){
    this.offreService.getOffre(id).subscribe(value => {
      console.log(value)
      this.offre=value;
      this.form.patchValue(this.offre);
    })
  }

  edit() {
    this.offreService.updateOffre(this.form.get('idOffre')?.value, this.form.getRawValue()).subscribe(value => {
      console.log(value)
      alert("Offre Modifié avec succès.")
      this.router.navigate(['/home/offres'])
    })
  }
}
