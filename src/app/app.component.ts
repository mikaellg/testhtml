import { Component } from '@angular/core';
import { LanguageService, SettingsService } from './services';
import { Settings } from './models';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  api_url: string;
  environmentName: string;
  constructor(private languageService: LanguageService, private settingsService: SettingsService,
    private localStorageService: LocalStorageService) {
    this.languageService.setDefaultLang();
    this.settingsService.subscribe(this, this.setSettings);
  }

  setSettings(caller: any, newSettings: Settings) {
    const thisCaller = caller as AppComponent;
    thisCaller.api_url = newSettings.api_url;
  }
}
