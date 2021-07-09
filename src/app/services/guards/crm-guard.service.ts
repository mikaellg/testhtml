import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { SessionService, } from '../helpers/session.service';
import { NavigationService } from '../helpers/navigation.service';
import { APP_SETTINGS } from '../../appsettings';

@Injectable({
  providedIn: 'root'
})
export class CrmModuleGuard implements CanActivate {

  constructor(private _navigationService: NavigationService, private _sessionService: SessionService) { }

  canActivate() {

    if (this._sessionService.isLoggedIn()) {
      if (APP_SETTINGS.features.enableCommerceModule) {
        return true;
      } else {
        this._navigationService.navigateToRoot();
        return false;
      }
    } else {
      this._navigationService.navigateToLogin();
      return false;
    }
  }
}
