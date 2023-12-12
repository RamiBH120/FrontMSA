import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOffreComponent } from './components/offres/list-offre/list-offre.component';
import { AddOffreComponent } from './components/offres/add-offre/add-offre.component';
import { EditOffreComponent } from './components/offres/edit-offre/edit-offre.component';
import { EditHotelComponent } from './components/hotels/edit-hotel/edit-hotel.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { ListHotelComponent } from './components/hotels/list-hotel/list-hotel.component';
import { ListReservationComponent } from './components/reservations/list-reservation/list-reservation.component';
import { EditReservationComponent } from './components/reservations/edit-reservation/edit-reservation.component';
import { AddReservationComponent } from './components/reservations/add-reservation/add-reservation.component';
import { AddPaysComponent } from './components/pays/add-pays/add-pays.component';
import { EditPaysComponent } from './components/pays/edit-pays/edit-pays.component';
import { ListPaysComponent } from './components/pays/list-pays/list-pays.component';
import { ListArticleComponent } from './components/articles/list-article/list-article.component';
import { AddArticleComponent } from './components/articles/add-article/add-article.component';
import { EditArticleComponent } from './components/articles/edit-article/edit-article.component';
import { EditSiteComponent } from './components/sites/edit-site/edit-site.component';
import { AddSiteComponent } from './components/sites/add-site/add-site.component';
import { ListSiteComponent } from './components/sites/list-site/list-site.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180/auth',
        realm: 'GatewayKeycloak',
        clientId: 'gateway-service'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/verify-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    ListOffreComponent,
    AddOffreComponent,
    EditOffreComponent,
    EditHotelComponent,
    AddHotelComponent,
    ListHotelComponent,
    ListReservationComponent,
    EditReservationComponent,
    AddReservationComponent,
    AddPaysComponent,
    EditPaysComponent,
    ListPaysComponent,
    ListArticleComponent,
    AddArticleComponent,
    EditArticleComponent,
    EditSiteComponent,
    AddSiteComponent,
    ListSiteComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
