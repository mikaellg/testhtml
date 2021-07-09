import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { DisableControlDirective } from './disable-control.directive';
import { MediaPreviewDirective } from './media-preview.directive';
import { AfterIfDirective } from './after-if.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutofocusDirective,
    DisableControlDirective,
    MediaPreviewDirective,
    AfterIfDirective
  ],
  exports: [
    AutofocusDirective,
    DisableControlDirective,
    MediaPreviewDirective,
    AfterIfDirective
  ]
})
export class DirectivesModule { }
