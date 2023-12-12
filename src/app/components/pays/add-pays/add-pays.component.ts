import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaysService } from 'src/app/services/pays/pays.service';

@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrls: ['./add-pays.component.css']
})
export class AddPaysComponent {
  form!: FormGroup

  constructor(private paysService: PaysService,private router:Router) {
  }

  ngOnInit() {

    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      description: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      ville: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
    })
  }




  add() {
    this.paysService.addOffre(this.form.getRawValue()).subscribe(() => {
      console.log()
      alert("pays ajouté avec succès.")
      this.router.navigate(['/home/ListePays'])
    })
  }

}
