import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TwitterClientService {

  BASE_URL = '/activiti-api';

  constructor(private http: HttpClient) {

  }

  getCampaigns(): Observable<any> {
    return this.http.get(this.BASE_URL + '/campaigns');
  }

  getPositiveTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/rank/' + id + '/positive');
  }

  getNegativeTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/rank/' + id + '/negative');
  }

  getNeutralTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-connectors-ranking/rank/' + id + '/neutral');
  }

  getProcessedTweets(id: String): Observable<any> {
    return this.http.get(this.BASE_URL + '/ttc-query-campaign/processed/' + id + '?sort=lastModified,desc');
  }
}
