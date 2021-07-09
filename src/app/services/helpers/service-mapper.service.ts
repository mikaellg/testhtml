import { Injectable, Injector, Type } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ServiceMapper {
  // Aqui poner todos los servicios que se quieran mapear
  private services = {
  }

  constructor(private injector: Injector) {
  }

  getService(serviceName: string): any {
    const service = this.injector.get<any>(this.services[serviceName]);
    if (service) {
      return service;
    } else {
      throw new Error('Service not found');
    }
  }
}
