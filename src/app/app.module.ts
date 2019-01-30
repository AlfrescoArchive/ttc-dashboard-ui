import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER, NgZone} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {TwitterClientService} from './services/twitter-client.service';
import {TwitterCampaignsComponent} from './twitter-campaigns/twitter-campaigns.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {TwitterCampaignDetailsComponent} from './twitter-campaign-details/twitter-campaign-details.component';
import {
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatBadgeModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeycloakService, KeycloakAngularModule} from 'keycloak-angular';
import {initializer} from './utils/app-init';
import {AppAuthGuard} from './app.authguard';
// Apollo
import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink, split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';

@NgModule({
  declarations: [
    AppComponent,
    TwitterCampaignsComponent,
    TwitterCampaignDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatTabsModule,
    KeycloakAngularModule
  ],
  providers: [
    TwitterClientService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    AppAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo,
    httpLink: HttpLink,
    keycloak: KeycloakService,
    private ngzone: NgZone) {

    const hasSubscriptionOperation = ({query: {definitions}}) =>
      definitions.some(
        ({kind, operation}) =>
        kind === 'OperationDefinition' && operation === 'subscription',
      )

    this.ngzone.runOutsideAngular(() => {
      keycloak.getToken().then((token) => {
        console.log('token' + token);
      }, (error) => {
        console.log('error' + error);
      });
    });

    // keycloak.getToken().then((token) => {
    let token = 'try';
    console.log('token' + token);

    const link = ApolloLink.split(
      hasSubscriptionOperation,
      new WebSocketLink({
        uri: 'ws://activiti-cloud-gateway.activiti.envalfresco.com/ws/graphql',
        options: {
          reconnect: true,
          lazy: true,
          // // carry login state (should use secure websockets (wss) when using this)
          connectionParams: {
            'X-Authorization': 'Bearer ' + token
          }
        }
      }),
      httpLink.create({
        uri: 'http://activiti-cloud-gateway.activiti.envalfresco.com/graphql',
      }),
    );

    // create Apollo
    apollo.create({
      link,
      cache: new InMemoryCache(),
    });

    // },(error)=>{
    //   console.log('error' + error);
    // });
  }
}
