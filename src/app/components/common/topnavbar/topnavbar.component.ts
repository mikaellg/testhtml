import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  smoothlyMenu
} from '../../../app.helpers';
import {
  LoginService,
  NavigationService,
  SessionService,
  LanguageService,
  Language,
} from '../../../services';


import {
  Subject
} from 'rxjs';
import {
  takeUntil
} from 'rxjs/operators';
import { APP_SETTINGS } from '../../../appsettings';

declare let jQuery: any;

@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent implements OnInit, OnDestroy {
  // public fields
  counter: number;
  languages: Language[];
  currentLanguage: Language;
  userRole: string;
  isCartEnabled: boolean;

  // private fields
  private ngUnsubscribe = new Subject();
  isDefaultUser: boolean;

  constructor(private _navigationService: NavigationService,
    private _sessionService: SessionService,
    private _loginService: LoginService,
    private languageService: LanguageService,
    ) {
    }

  ngOnInit() {
    //console.log('name 1');
    this.isCartEnabled = APP_SETTINGS.features.enableSalesModule && APP_SETTINGS.features.enableCommerceModule;
    this.languageService.getLanguages()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(languages => {
        this.languages = languages;
        this.selectLanguage(this.languageService.getBrowserLang());
      });


  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu(this.isDefaultUser);
  }

  logout() {
  }

  login() {
    this._navigationService.navigateToLogin();
  }

  goHome() {
    this._navigationService.navigateToLanding();
  }

  private returnToLogin() {
    this._sessionService.clearSession();
    this._navigationService.navigateToLanding();
    smoothlyMenu(this.isDefaultUser);
  }

  goToCart() {
  }

  trackById(index, item) {
    return index;
  }

  selectLanguage(language: string) {
    if (language && language !== undefined) {
      this.currentLanguage = this.languages.find(x => x.id === language);
      this.languageService.updateLanguge(this.currentLanguage.id);
    }
  }
}
