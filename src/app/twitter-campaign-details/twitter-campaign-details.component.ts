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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private twitterClientService: TwitterClientService) {
  }

  ngOnInit() {
    this.getPositiveTweets();
    this.getNegativeTweets();

  }

  private getNegativeTweets() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.twitterClientService.getNegativeTweets(params.id).subscribe((data: any[]) => {
          this.negativeFeeds = new MatTableDataSource(data);
          this.negativeFeeds.sort = this.sort;

        }, error => {
          console.log(error);
        }
      );
    });
  }

  private getPositiveTweets() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.twitterClientService.getPositiveTweets(params.id).subscribe((data: any[]) => {
          this.positiveFeeds = new MatTableDataSource(data);
          this.positiveFeeds.sort = this.sort;

        }, error => {
          console.log(error);
        }
      );
    });
  }
}
