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
  MatChipsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatChipsModule
  ],
  providers: [
    TwitterClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
