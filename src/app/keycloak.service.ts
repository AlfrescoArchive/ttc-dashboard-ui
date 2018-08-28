import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  constructor() { }

  private keycloakAuth: any;


init(): Promise<any> {
  return new Promise((resolve, reject) => {
     const config = {
       'url': 'localhost:8180',
       'realm': 'activiti',
       'clientId': 'activiti'
     };
     this.keycloakAuth = new Keycloak(config);
     this.keycloakAuth.init({ onLoad: 'login-required' })
       .success(() => {
         resolve();
       })
       .error(() => {
         reject();
       });
     });
   };

   getToken(): string {
    return this.keycloakAuth.token;
  }
 

}
