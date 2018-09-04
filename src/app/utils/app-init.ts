import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
            config: {
              url: 'http://activiti-keycloak.jx-staging.35.189.236.129.nip.io/auth/',
              realm: 'activiti',
              clientId: 'activiti'
            },
            initOptions: {
              onLoad: 'login-required',
              checkLoginIframe: false
            },
            enableBearerInterceptor: true,
            bearerExcludedUrls: [
              '/assets',
              '/clients/public'
            ],
          });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}