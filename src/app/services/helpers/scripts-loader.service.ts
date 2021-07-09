import { Injectable, TemplateRef, ElementRef, Injector } from '@angular/core';
import { LazyLoaderService } from './lazy-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ScriptsLoaderService {
  protected lazyLoaderService: LazyLoaderService;

  constructor() {

  }

  public setInjector(injector: Injector) {
    this.lazyLoaderService = injector.get(LazyLoaderService);
  }

  loadScripts(scriptPath: string, scriptName: string, charset?: string, position = 'head' || 'body', defer = true): boolean {
    // Cargando los scripts que serán obtenidos por lazy loading
    if (this.lazyLoaderService) {
      this.lazyLoaderService.loadScript(scriptPath, scriptName, charset, position, defer)
    .then(() => {})
    .catch(() => {});
    return true;
    } else {
      throw new Error('service does not loaded');
    }
  }

  quitScripts(scriptName: string, position = 'head' || 'body'): boolean {
    if (this.lazyLoaderService) {
      this.lazyLoaderService.removeScript(scriptName, position);
    } else {
      throw new Error('service does not loaded');
    }
    return false;
  }
}
