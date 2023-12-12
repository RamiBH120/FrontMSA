import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre/offre';
import { OffreService } from 'src/app/services/offre/offre.service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent {
  offres: Offre[] = [];
  filter!: string;

  constructor(private offreService: OffreService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllOffres();
  }

  getAllOffres() {
    return this.offreService.getAllOffre().subscribe((data: Offre[]) => {
      console.log(data);
      this.offres = data;
    });
  }

  deleteOffre(id:number) {
    return this.offreService.deleteOffre(id).subscribe(()=>{
      alert("Offre deleted")
      this.getAllOffres();
    });
  }

  goToUpdate(id: number) {
    this.router.navigate(['edit', id]);
  }
}
