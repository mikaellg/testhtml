import { Injectable, TemplateRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class PopModalService {

  constructor(public _dialog: MatDialog,
    private _bottomSheet: MatBottomSheet,
    private _modalService: BsModalService) { }

  showDialog<T>(component: ComponentType<T> | TemplateRef<T>, width: string = '400px', height: string = '400px') {
    if (component != null) {
      this._dialog.open(component, {
        width: width,
        height: height
      });
    }
  }

  showBottomSheet<T>(component: ComponentType<T>) {
    this._bottomSheet.open(component);
  }

  showBottomTemplateSheet<T>(template: TemplateRef<T>) {
    this._bottomSheet.open(template);
  }

  showConfirm(template: TemplateRef<any>): BsModalRef {
    return this._modalService.show(template, {animated: true, class: 'modal-sm'});
  }

  showModal(component: ComponentType<any> | TemplateRef<any>, options: ModalOptions): BsModalRef {
    return this._modalService.show(component, options);
  }
}
