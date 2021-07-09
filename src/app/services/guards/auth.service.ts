import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { SessionService, } from '../helpers/session.service';
import { NavigationService } from '../helpers/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _navigationService: NavigationService, private _sessionService: SessionService) { }

  canActivate() {

    if (this._sessionService.isLoggedIn()) {
      return true;
    } else {
      this._navigationService.navigateToLogin();
      return false;
    }
  }
}
