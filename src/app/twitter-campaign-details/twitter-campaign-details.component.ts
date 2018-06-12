import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TwitterClientService } from '../services/twitter-client.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-twitter-campaign-details',
  templateUrl: './twitter-campaign-details.component.html',
  styleUrls: ['./twitter-campaign-details.component.css']
})
export class TwitterCampaignDetailsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['nroOfTweets', 'userName'];
  displayedColumnsProcessed = ['author', 'text', 'attitude'];
  displayedColumnsReward = ['nroOfTweets', 'userName', 'rewardsText'];

  negativeFeeds: any;
  positiveFeeds: any;
  neutralFeeds: any;
  processedFeeds: any;
  rewardFeeds: any;

  isNegativeFeedsLoading = true;
  isPositiveFeedsLoading = true;
  isNeutralFeedsLoading = true;
  isProcessedFeedsLoading = true;
  isRewardFeedsLoading = true;

  campaign;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private twitterClientService: TwitterClientService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.campaign = params.id;
      this.getPositiveTweets();
      this.getNegativeTweets();
      this.getNeutralTweets();
      this.getProcessedTweets();
      this.getRewardsTweets();
    });
  }

  private getNegativeTweets() {
    this.isNegativeFeedsLoading = true;
    this.negativeFeeds = null;

    this.twitterClientService.getNegativeTweets(this.campaign).subscribe((data: any) => {
        this.negativeFeeds = new MatTableDataSource(data);
        this.negativeFeeds.sort = this.sort;
        this.isNegativeFeedsLoading = false;
      }, error => {
        this.isNegativeFeedsLoading = false;

        console.log(error);
      }
    );

  }

  private getPositiveTweets() {
    this.isPositiveFeedsLoading = true;
    this.positiveFeeds = null;

    this.twitterClientService.getPositiveTweets(this.campaign).subscribe((data: any) => {
        this.positiveFeeds = new MatTableDataSource(data);
        this.positiveFeeds.sort = this.sort;
        this.isPositiveFeedsLoading = false;
      }, error => {
        this.isPositiveFeedsLoading = false;

        console.log(error);
      }
    );
  }

  private getNeutralTweets() {
    this.isNeutralFeedsLoading = true;
    this.neutralFeeds = null;

    this.twitterClientService.getNeutralTweets(this.campaign).subscribe((data: any) => {
        this.neutralFeeds = new MatTableDataSource(data);
        this.neutralFeeds.sort = this.sort;
        this.isNeutralFeedsLoading = false;

      }, error => {
        this.isNeutralFeedsLoading = false;

        console.log(error);
      }
    );
  }

  private getProcessedTweets() {
    this.isProcessedFeedsLoading = true;
    this.processedFeeds = null;

    this.twitterClientService.getProcessedTweets(this.campaign).subscribe((data: any) => {
        this.processedFeeds = new MatTableDataSource(data.list.entries);
        this.processedFeeds.sort = this.sort;
        this.isProcessedFeedsLoading = false;
      }, error => {
        this.isProcessedFeedsLoading = false;

        console.log(error);
      }
    );
  }

  private refreshRanking() {
    this.getPositiveTweets();
    this.getNegativeTweets();
    this.getNeutralTweets();
  }

  private deleteRanking() {
    this.twitterClientService.deleteRanking(this.campaign).subscribe((data: any) => {
        this.getPositiveTweets();
        this.getNegativeTweets();
        this.getNeutralTweets();
      }, error => {
        console.log(error);
      }
    );
  }

  private deleteReward() {
    this.twitterClientService.deleteReward(this.campaign).subscribe((data: any) => {
        this.getRewardsTweets();
      }, error => {
        console.log(error);
      }
    );
  }

  private getRewardsTweets() {
    this.isRewardFeedsLoading = true;
    this.rewardFeeds = null;

    this.twitterClientService.getRewardsTweets(this.campaign).subscribe((data: any) => {
        data = (data === null) ? [] : data;
        this.rewardFeeds = new MatTableDataSource(data);
        this.rewardFeeds.sort = this.sort;
        this.isRewardFeedsLoading = false;

      }, error => {
        this.isRewardFeedsLoading = false;

        console.log(error);
      }
    );
  }

  isNegativeFeedsEmpty(): boolean {
    if (this.negativeFeeds && this.negativeFeeds.data && this.negativeFeeds.data.length === 0 && !this.isNegativeFeedsLoading) {
      return true;
    }
    return false;
  }

  isPositiveFeedsEmpty(): boolean {
    if (this.positiveFeeds && this.positiveFeeds.data && this.positiveFeeds.data.length === 0 && !this.isPositiveFeedsLoading) {
      return true;
    }
    return false;
  }

  isNeutralFeedsEmpty(): boolean {
    if (this.neutralFeeds && this.neutralFeeds.data && this.neutralFeeds.data.length === 0 && !this.isNeutralFeedsLoading) {
      return true;
    }
    return false;
  }

  isProcessedFeedsEmpty(): boolean {
    if (this.processedFeeds && this.processedFeeds.data && this.processedFeeds.data.length === 0 && !this.isProcessedFeedsLoading) {
      return true;
    }
    return false;
  }

  isRewardFeedsEmpty(): boolean {
    if (this.rewardFeeds && this.rewardFeeds.data && this.rewardFeeds.data.length === 0 && !this.isRewardFeedsLoading) {
      return true;
    }
    return false;
  }
}
