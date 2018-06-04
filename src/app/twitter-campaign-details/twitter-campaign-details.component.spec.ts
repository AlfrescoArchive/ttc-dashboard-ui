import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCampaignDetailsComponent } from './twitter-campaign-details.component';

describe('TwitterCampaignDetailsComponent', () => {
  let component: TwitterCampaignDetailsComponent;
  let fixture: ComponentFixture<TwitterCampaignDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterCampaignDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterCampaignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
