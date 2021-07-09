import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoimagePipe } from './noimage.pipe';
import { CapitalizedPipe } from './capitalized.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NoimagePipe,
    CapitalizedPipe,
  ],
  exports: [
    NoimagePipe,
    CapitalizedPipe,
  ]
})
export class PipesModule { }
