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
  statusCampaign = false;
  isstatusCampaignLoading = true;

  isRankingServiceAvailableLoading = true;
  isTwitterCampaignServiceAvailableLoading = true;
  isRewardServiceAvailableLoading = true;
  isProcessingServiceAvailableLoading = true;
  isQueryServiceAvailableLoading = true;
  isGatewayerviceAvailableLoading = true;

  isRankingServiceAvailableFlag;
  isTwitterCampaignServiceAvailableFlag;
  isRewardServiceAvailableFlag;
  isProcessingServiceAvailableFlag;
  isQueryServiceAvailableFlag;
  isGatewayServiceAvailableFlag;

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
    this.twitterClientService.statusCampaign().subscribe((data: any) => {
      this.statusCampaign = !data;
      this.isstatusCampaignLoading = false;
    }, error => {
      this.isstatusCampaignLoading = false;
    });

    this.isRankingServiceAvailable();
    this.isTwitterCampaignServiceAvailable();
    this.isRewardServiceAvailable();
    this.isQueryServiceAvailable();
    this.isProcessingServiceAvailable();
    this.isGatewayAvailable();
  }

  private isRankingServiceAvailable() {
    this.twitterClientService.isRankingServiceAvailable().subscribe((data: any) => {
        this.isRankingServiceAvailableFlag = true;
        this.isRankingServiceAvailableLoading = false;
      }, error => {
        this.isRankingServiceAvailableFlag = false;
        this.isRankingServiceAvailableLoading = false;
      }
    );
  }

  private isTwitterCampaignServiceAvailable() {
    this.twitterClientService.isTwitterCampaignServiceAvailable().subscribe((data: any) => {
        this.isTwitterCampaignServiceAvailableFlag = true;
        this.isTwitterCampaignServiceAvailableLoading = false;
      }, error => {
        this.isTwitterCampaignServiceAvailableFlag = false;
        this.isTwitterCampaignServiceAvailableLoading = false;
      }
    );
  }

  private isRewardServiceAvailable() {
    this.twitterClientService.isRewardServiceAvailable().subscribe((data: any) => {
        this.isRewardServiceAvailableFlag = true;
        this.isRewardServiceAvailableLoading = false;
      }, error => {
        this.isRewardServiceAvailableFlag = false;
        this.isRewardServiceAvailableLoading = false;
      }
    );
  }

  private isProcessingServiceAvailable() {
    this.twitterClientService.isProcessingServiceAvailable().subscribe((data: any) => {
        this.isProcessingServiceAvailableFlag = true;
        this.isProcessingServiceAvailableLoading = false;
      }, error => {
        this.isProcessingServiceAvailableFlag = false;
        this.isProcessingServiceAvailableLoading = false;
      }
    );
  }

  private isQueryServiceAvailable() {
    this.twitterClientService.isQueryServiceAvailable().subscribe((data: any) => {
        this.isQueryServiceAvailableFlag = true;
        this.isQueryServiceAvailableLoading = false;
      }, error => {
        this.isQueryServiceAvailableFlag = false;
        this.isQueryServiceAvailableLoading = false;
      }
    );
  }

  private isGatewayAvailable() {
    this.twitterClientService.isGatewayAvailable().subscribe((data: any) => {
        this.isGatewayServiceAvailableFlag = true;
        this.isGatewayerviceAvailableLoading = false;
      }, error => {
        this.isGatewayServiceAvailableFlag = false;
        this.isGatewayerviceAvailableLoading = false;
      }
    );
  }

  private refreshGateway() {
    this.twitterClientService.refreshGateway().subscribe((data: any) => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
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

  switchCampaign(event) {
    if (!event.checked) {
      this.startCampaign();
    } else {
      this.stopCampaign();
    }
  }

  startCampaign() {
    this.twitterClientService.startCampaign().subscribe((data: any) => {
      console.log(data);
    });
  }

  stopCampaign() {
    this.twitterClientService.stopCampaign().subscribe((data: any) => {
      console.log(data);
    });
  }
}
