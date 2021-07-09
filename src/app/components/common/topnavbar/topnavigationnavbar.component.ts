import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';

declare let jQuery: any;

@Component({
  selector: 'topnavigationnavbar',
  templateUrl: 'topnavigationnavbar.template.html'
})
export class TopNavigationNavbarComponent {
  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu(false);
  }
}
