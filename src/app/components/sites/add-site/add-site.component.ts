import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/services/site/site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent {

  
  form!: FormGroup

  constructor(private SiteService: SiteService,private router:Router) {
  }

  ngOnInit() {

    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      nomST: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      descriptionST: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
    })
  }




  add() {
    this.SiteService.addSite(this.form.getRawValue()).subscribe(() => {
      console.log()
      alert("Offre ajouté avec succès.")
      this.router.navigate(['/home/sites'])
    })
  }


}
