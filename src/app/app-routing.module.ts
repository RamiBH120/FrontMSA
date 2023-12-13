import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOffreComponent } from './components/offres/list-offre/list-offre.component';
import { AddOffreComponent } from './components/offres/add-offre/add-offre.component';
import { EditOffreComponent } from './components/offres/edit-offre/edit-offre.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EditSiteComponent } from './components/sites/edit-site/edit-site.component';
import { AddSiteComponent } from './components/sites/add-site/add-site.component';
import { ListSiteComponent } from './components/sites/list-site/list-site.component';

const routes: Routes = [
  {path: "", redirectTo: "/home",pathMatch:"full"},
  {path: "home", component: HomeComponent,children:[

  { path: "offres", component:ListOffreComponent},
  { path: "offres/add", component:AddOffreComponent},
  { path: "offres/edit/:id", component:EditOffreComponent},

  { path: "sites", component:ListSiteComponent},
  { path: "sites/add", component:AddSiteComponent},
  { path: "sites/edit/:id", component:EditSiteComponent},

  ]},
  { path: "**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
