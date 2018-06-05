import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCampaignsComponent } from './twitter-campaigns.component';

describe('TwitterCampaignsComponent', () => {
  let component: TwitterCampaignsComponent;
  let fixture: ComponentFixture<TwitterCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
