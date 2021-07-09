import { Injectable } from '@angular/core';

import swal, { SweetAlertResult, SweetAlertOptions, SweetAlertType, } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  options: SweetAlertOptions;

  constructor() {
    this.options = {
      confirmButtonColor: 'darkcyan',
      showConfirmButton: false,
      timer: 3000000
    };
  }

  getInstance(message?: string, type?: SweetAlertType): Promise<SweetAlertResult> {
    if (message) {
      this.options.text = message;
    }

    if (type) {
      this.options.type = type;
    }

    return swal(this.options);
  }
}
