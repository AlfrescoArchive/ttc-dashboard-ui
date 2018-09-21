import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'http://activiti-keycloak.jx-staging.35.189.236.129.nip.io/auth/',
  realm: 'activiti',
  clientId: 'activiti'
};

export const environment = {
  production: false,
  assets: { dotaImages: 'https://api.opendota.com/apps/dota2/images' },
  apis: { dota: 'https://api.opendota.com/api' },
  keycloak: keycloakConfig
};