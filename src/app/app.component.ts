import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
		import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLogged = false;
  public profile: KeycloakProfile | null = null;
 
  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {

    this.isLogged = await this.keycloak.isLoggedIn();

    type userRoles = Array<{id: number, text: string}>;

    if (this.isLogged) {
      this.profile = await this.keycloak.loadUserProfile();
    }
  }

  public initSession() {
    this.keycloak.login();
  }

  public closeSession() {
    this.keycloak.logout();
  }
}