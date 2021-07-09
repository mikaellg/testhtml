import { Injectable } from '@angular/core';
declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() {
    toastr.options = this.getToasterOptions();
  }

  getToasterOptions() {
    toastr.options.closeButton = true;
    toastr.options.closeMethod = 'fadeOut';
    // toastr.options.closeDuration = timeout;
    toastr.options.closeEasing = 'swing';
    // toastr.options.preventDuplicates =true;
    toastr.options.newestOnTop = false;
    toastr.options.timeOut = 5000;
    toastr.options.extendedTimeOut = 1000;
    toastr.options.progressBar = true;
    toastr.options.positionClass = 'toast-top-right';

    return toastr.options;
  }

  showInfo(message: string) {
    toastr.info(message);
  }

  showWarning(title: string = '', message: string = '') {
    toastr.warning(title, message);
  }

  showSuccess(title: string = '', message: string = '') {
    toastr.success(title, message);
  }

  showError(title: string = '', message: string = '') {
    toastr.error(title, message);
  }
}
