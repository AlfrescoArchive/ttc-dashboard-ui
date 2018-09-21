import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterCampaignsComponent } from './twitter-campaigns/twitter-campaigns.component';
import { TwitterCampaignDetailsComponent } from './twitter-campaign-details/twitter-campaign-details.component';
import { AppAuthGuard } from './app.authguard';

const routes: Routes = [
  {
    path: '',
    component: TwitterCampaignsComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'campaigns',
    component: TwitterCampaignsComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'campaigns/:id',
    component: TwitterCampaignDetailsComponent,
    canActivate: [AppAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
