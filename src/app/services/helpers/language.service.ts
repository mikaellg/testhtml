import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languages: Language[] = [
    {
      id: 'es',
      name: 'Spanish',
      image: 'assets/images/flags/32/Spain.png'
    },
    {
      id: 'en',
      name: 'English',
      image: 'assets/images/flags/32/United-States.png'
    },
    {
      id: 'ch',
      name: 'Chinese',
      image: 'assets/images/flags/32/China.png'
    },
    {
      id: 'ge',
      name: 'German',
      image: 'assets/images/flags/32/Germany.png'
    }
  ];

  constructor(private translateService: TranslateService) { }

  getLanguages(): Observable<Language[]> {
    return of(this.languages);
  }

  getBrowserLang() {
    return this.translateService.getBrowserLang();
  }

  setDefaultLang() {
    this.translateService.setDefaultLang('en');
    const browserLang = this.getBrowserLang();
    this.translateService.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  getDefaultLang() {
    return this.translateService.getDefaultLang();
  }

  updateLanguge(language: string) {
    this.translateService.use(language);
  }
}

export class Language {
  id: string;
  name: string;
  image: string;
}
