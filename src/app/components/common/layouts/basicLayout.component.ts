import { Component, OnInit } from '@angular/core';
import { detectBody, smoothlyMenu } from '../../../app.helpers';
import { APP_SETTINGS } from '../../../appsettings';
import { SessionService } from '../../../services';

declare let jQuery: any;

@Component({
  selector: 'basic',
  templateUrl: 'basicLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class BasicLayoutComponent implements OnInit {

  private isDefaultUser: boolean;
  constructor (private sessionService: SessionService) {}

  public ngOnInit(): any {
      this.isDefaultUser = this.sessionService.isDefaultUser();
      detectBody(this.isDefaultUser);
      //smoothlyMenu(this.isDefaultUser);
  }

  public onResize() {
    this.isDefaultUser = this.sessionService.isDefaultUser();
    detectBody(this.isDefaultUser);
    smoothlyMenu(this.isDefaultUser);
  }
}
