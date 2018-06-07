import { Component } from '@angular/core';
import { TwitterClientService } from './services/twitter-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitter Campaigns';

  statusCampaign = false;

  constructor(private twitterClientService: TwitterClientService) {
    this.twitterClientService.statusCampaign().subscribe((data: any) => {
      this.statusCampaign = !data;
    });
  }

  switchCampaign(event) {
    if (event.checked) {
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
