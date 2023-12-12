import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from 'src/app/models/pays/pays';
import { PaysService } from 'src/app/services/pays/pays.service';

@Component({
  selector: 'app-list-pays',
  templateUrl: './list-pays.component.html',
  styleUrls: ['./list-pays.component.css']
})
export class ListPaysComponent {
  pays: Pays[] = [];
  filter!: string;

  constructor(private paysService: PaysService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllOffres();
  }

  getAllOffres() {
    return this.paysService.getAllOffre().subscribe((data: Pays[]) => {
      console.log(data);
      this.pays = data;
    });
  }
  goToUpdate(id: number) {
    this.router.navigate(['home/ListePays/edit', id]);
  }
  deleteOffre(id:number) {
    return this.paysService.deleteOffre(id).subscribe(()=>{
      alert("Pays deleted")
      this.getAllOffres();
    });
  }
}
