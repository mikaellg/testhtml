import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { ExpiredUnit } from 'angular-web-storage/src/util';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private _sessionStorageService: SessionStorageService,
    private router: Router) { }



  isDefaultUser(): boolean {
      return true;
  }

  isLoggedIn() {
      return true;
  }

  isAdminOrSalesman(): boolean {
    return true;
  }

  isAdmin() {
        return true;
  }

  isSalesman() {
        return true;
  }

  clearSession() {
    this._sessionStorageService.clear();
    this.router.navigate(['/home']);
  }

 setSessionInfo(data: any, expireAt: number, expireUnit: ExpiredUnit) {
  }

  setIsLodadedState(data: boolean) {
  }

  getIsLoaded(): boolean {
    return  false;
  }

  setImageService(data: string) {
  }

  getImageService(): string {
    return null;
  }

  getPosition(): Promise<any> {
    return null;
  }

}
