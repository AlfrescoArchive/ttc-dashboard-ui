import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { TwitterCampaignsComponent } from './twitter-campaigns/twitter-campaigns.component';
import { TwitterCampaignDetailsComponent } from './twitter-campaign-details/twitter-campaign-details.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TwitterCampaignsComponent,
        TwitterCampaignDetailsComponent
      ],
      imports: [
        AngularFontAwesomeModule,
        MatToolbarModule,
        AppRoutingModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        MatListModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
