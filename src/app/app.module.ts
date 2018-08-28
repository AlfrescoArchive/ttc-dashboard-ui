import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TwitterClientService } from './services/twitter-client.service';
import { TwitterCampaignsComponent } from './twitter-campaigns/twitter-campaigns.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TwitterCampaignDetailsComponent } from './twitter-campaign-details/twitter-campaign-details.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakService } from './keycloak.service';
import { TokenInterceptorComponent } from './token-interceptor/token-interceptor.component';

export function kcFactory(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}


@NgModule({
  declarations: [
    AppComponent,
    TwitterCampaignsComponent,
    TwitterCampaignDetailsComponent,
    TokenInterceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
    MatTabsModule
  ],
  providers: [
    TwitterClientService,
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      deps: [KeycloakService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
