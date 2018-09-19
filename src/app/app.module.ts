import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';
import { AppAuthGuard } from './app.authguard';

@NgModule({
  declarations: [
    AppComponent,
    TwitterCampaignsComponent,
    TwitterCampaignDetailsComponent
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
}
