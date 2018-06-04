import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterCampaignsComponent } from './twitter-campaigns/twitter-campaigns.component';
import { TwitterCampaignDetailsComponent } from './twitter-campaign-details/twitter-campaign-details.component';

const routes: Routes = [
  {
    path: '',
    component: TwitterCampaignsComponent
  },
  {
    path: 'campaigns',
    component: TwitterCampaignsComponent
  },
  {
    path: 'campaigns/:id',
    component: TwitterCampaignDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
