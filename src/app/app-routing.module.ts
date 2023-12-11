import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOffreComponent } from './components/offres/list-offre/list-offre.component';
import { AddOffreComponent } from './components/offres/add-offre/add-offre.component';
import { EditOffreComponent } from './components/offres/edit-offre/edit-offre.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  { path: 'offres', component:ListOffreComponent},
  { path: 'offres/add', component:AddOffreComponent},
  { path: 'offres/edit', component:EditOffreComponent},
  { path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
