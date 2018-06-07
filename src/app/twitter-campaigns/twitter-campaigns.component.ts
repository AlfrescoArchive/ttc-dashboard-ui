import { Component, OnInit } from '@angular/core';
import { TwitterClientService } from '../services/twitter-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twitter-campaigns',
  templateUrl: './twitter-campaigns.component.html',
  styleUrls: ['./twitter-campaigns.component.css']
})
export class TwitterCampaignsComponent implements OnInit {

  campaigns: any[];

  isCampaignsLoading = true;

  constructor(private twitterClientService: TwitterClientService, private router: Router) {
    twitterClientService.getCampaigns().subscribe((data: any[]) => {
        this.campaigns = data;
        this.isCampaignsLoading = false;
      }, error => {
        this.isCampaignsLoading = false;
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  openCampaign(campaign) {
    this.router.navigate(['/campaigns', campaign.name]);
  }

  isCampaignEmpty() {
    if (this.campaigns && this.campaigns.length === 0 && !this.isCampaignsLoading) {
      return true;
    } else {
      return false;
    }
  }
}
