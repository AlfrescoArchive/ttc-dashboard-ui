import { Component } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marketing Campaign';

  campaign;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    router.events.subscribe((params) => {
      if (params instanceof RoutesRecognized) {
        if (params.state.root.firstChild.params.id) {
          this.campaign = ' - ' + params.state.root.firstChild.params.id;
        }
      }
    });
  }

  public navigateToRoute() {
    this.router.navigate(['/']);
  }
}
