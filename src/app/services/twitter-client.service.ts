import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TwitterClientService {

  BASE_URL = '/activiti-api';

  constructor(private http: HttpClient) {

  }

  getCampaigns(): Observable<any> {
    return this.http.get(this.BASE_URL + '/v1/campaigns');
  }

  getPositiveTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/v1/rank/' + id + '/positive');
  }

  getNegativeTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/v1/rank/' + id + '/negative');
  }

  getNeutralTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/v1/rank/' + id + '/neutral');
  }

  getProcessedTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-query-campaign/processed/v1/' + id + '?sort=lastModified,desc');
  }

  getRewardsTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-reward/rewards/v1/' + id);
  }

  startCampaign(): Observable<any> {
    return this.http.post(this.BASE_URL + '/ttc-connectors-dummytwitter/v1/feed/stop', null);
  }

  stopCampaign(): Observable<any> {
    return this.http.post(this.BASE_URL + '/ttc-connectors-dummytwitter/v1/feed/start', null);
  }

  statusCampaign(): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-dummytwitter/v1/feed');
  }

  isRewardServiceAvailable(): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-reward/v1/');
  }

  isTwitterCampaignServiceAvailable(): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-dummytwitter/v1/feed');
  }

  isRankingServiceAvailable(): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/v1/');
  }

  isProcessingServiceAvailable(): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-processing/v1/');
  }

  isQueryServiceAvailable(): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-query-campaign/v1/');
  }

  deleteRanking(id: String): Observable<any> {
    return this.http.delete(this.BASE_URL + '/ttc-connectors-ranking/v1/rank/' + id);
  }

  deleteReward(id: String): Observable<any> {
    return this.http.delete(this.BASE_URL + '/ttc-connectors-reward/v1/rewards/' + id);
  }

  isGatewayAvailable(): Observable<any> {
    return this.http.get(this.BASE_URL + '/v1/');
  }

  refreshGateway(): Observable<any> {
    return this.http.post(this.BASE_URL + '/actuator/refresh', null);
  }
}
