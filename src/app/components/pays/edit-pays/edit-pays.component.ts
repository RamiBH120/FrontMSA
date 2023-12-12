import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pays } from 'src/app/models/pays/pays';
import { PaysService } from 'src/app/services/pays/pays.service';

@Component({
  selector: 'app-edit-pays',
  templateUrl: './edit-pays.component.html',
  styleUrls: ['./edit-pays.component.css']
})
export class EditPaysComponent {
  form!: FormGroup
  pays!:Pays;

  constructor(private offreService: PaysService,
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

      nom: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      description: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      ville: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
    })
  }


  getById(id:number){
    this.offreService.getOffre(id).subscribe(value => {
      console.log(value)
      this.pays=value;
      this.form.patchValue(this.pays);
    })
  }

  edit() {
    this.offreService.updateOffre(this.form.get('id')?.value, this.form.getRawValue()).subscribe(value => {
      console.log(value)
      alert("pays Modifié avec succès.")
      this.router.navigate(['/home/ListePays'])
    })
  }

}
