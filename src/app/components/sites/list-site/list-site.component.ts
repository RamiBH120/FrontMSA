import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from 'src/app/models/site/site';
import { SiteService } from 'src/app/services/site/site.service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.css']
})
export class ListSiteComponent {

  sites: Site[] = [];
  filter!: string;

  constructor(private SiteService: SiteService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllSite();
  }

  getAllSite() {
    return this.SiteService.getAllSites().subscribe((data: Site[]) => {
      console.log(data);
      this.sites = data;
    });
  }

  deleteSite(id:number) {
    return this.SiteService.deleteSite(id).subscribe(()=>{
      alert("site deleted")
      this.getAllSite();
    });
  }

  goToUpdate(id: number) {
    this.router.navigate(['home/sites/edit', id]);
  }

}
