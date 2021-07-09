import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SessionService } from '../helpers/session.service';
import { APP_SETTINGS } from '../../appsettings';
import { Injector } from '@angular/core';
// import { SettingsService } from '../settings.service';

export class BaseService {

  protected _sessionService: SessionService;
  protected _httpClient: HttpClient;
  // private _settingsService: SettingsService;

  constructor(private injector: Injector) {
    this._sessionService = this.injector.get(SessionService);
    this._httpClient = this.injector.get(HttpClient);
    // this._settingsService = injector.get(SettingsService);
  }

  protected getApiQuery(path: string, post: boolean = false): string {
    let url = `${APP_SETTINGS.endpoints.api_url}/api/${path}`;
  
    return url;
  }

  protected getAuthorizationHeader(headerKey: string = 'Content-Type', headerValue: string = 'application/json; utf-8'){
        return null;
  }
}