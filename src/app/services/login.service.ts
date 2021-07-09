import { Injectable, Injector } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from './base/base.service';
import { BaseResult } from '../models';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../appsettings';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  authenticate(username: string, password: string): Observable<any> {

     return null;
  }

  logout(): Observable<BaseResult> {
    return null;
  }
}
