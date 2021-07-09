import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getAppVersion(): string {
  const version ='1.2.0.50';
  return version;
}

const providers = [
  { provide: 'VERSION', useFactory: getAppVersion, deps: [] },
];


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule, );
