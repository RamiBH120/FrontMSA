import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from 'src/app/models/site/site';
import { SiteService } from 'src/app/services/site/site.service';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent {

  form!: FormGroup
  site!:Site;

  constructor(private siteService: SiteService,
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
      nomST: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
      descriptionST: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]),
    })
  }


  getById(id:number){
    this.siteService.getSite(id).subscribe(value => {
      console.log(value)
      this.site=value;
      this.form.patchValue(this.site);
    })
  }

  edit() {
    this.siteService.updateSite(this.form.get('idOffre')?.value, this.form.getRawValue()).subscribe(value => {
      console.log(value)
      alert("Offre Modifié avec succès.")
      this.router.navigate(['/home/offres'])
    })
  }

}
