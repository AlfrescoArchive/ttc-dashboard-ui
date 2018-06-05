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

  negativeFeeds: any;
  positiveFeeds: any;
  neutralFeeds: any;
  processedFeeds: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private twitterClientService: TwitterClientService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPositiveTweets(params.id);
      this.getNegativeTweets(params.id);
      this.getNeutralTweets(params.id);
      this.getProcessedTweets(params.id);
    });
  }

  private getNegativeTweets(id: any) {
    this.twitterClientService.getNegativeTweets(id).subscribe((data: any[]) => {
        this.negativeFeeds = new MatTableDataSource(data);
        this.negativeFeeds.sort = this.sort;

      }, error => {
        console.log(error);
      }
    );

  }

  private getPositiveTweets(id: any) {
    this.twitterClientService.getPositiveTweets(id).subscribe((data: any[]) => {
        this.positiveFeeds = new MatTableDataSource(data);
        this.positiveFeeds.sort = this.sort;

      }, error => {
        console.log(error);
      }
    );
  }

  private getNeutralTweets(id: any) {
    this.twitterClientService.getNeutralTweets(id).subscribe((data: any[]) => {
        this.neutralFeeds = new MatTableDataSource(data);
        this.neutralFeeds.sort = this.sort;

      }, error => {
        console.log(error);
      }
    );
  }

  private getProcessedTweets(id: any) {
    this.twitterClientService.getProcessedTweets(id).subscribe((data: any[]) => {
        this.processedFeeds = new MatTableDataSource(data);
        this.processedFeeds.sort = this.sort;

      }, error => {
        console.log(error);
      }
    );
  }
}
