import { Injectable, Injector } from '@angular/core';
import { Settings } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends BaseService {

  public settings: Settings;
  public settingsNull: Settings = null;
  private settingsSubject: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(null);

  constructor(injector: Injector) {
    super(injector);
  }

  public getStimulsoftKey(): Observable<Settings> {
    const url = this.getApiQuery('.settings');
    return this._httpClient.get<Settings>(url, {headers: this.getAuthorizationHeader()});
  }

  public setSettings(newSettings: Settings) {
    if (newSettings === null || newSettings === undefined) {
      return;
    }

    this.settings = newSettings;
    if (this.settingsSubject) {
      this.settingsSubject.next(this.settings);
    }
  }

  public subscribe(caller: any, callback: (caller: any, newSettings: Settings) => void) {
    this.settingsSubject.subscribe((newSettings) => {
      if (newSettings === null) {
        return;
      }

      callback(caller, newSettings);
    });
  }
}
