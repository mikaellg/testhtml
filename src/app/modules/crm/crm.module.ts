import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PipesModule } from '../../pipes/pipes.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopModalService } from '../../services';
import { DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { FileUploadModule } from 'ng2-file-upload';
import { NumberPickerModule } from 'ng-number-picker';
import { DirectivesModule } from '../../directives/directives.module';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { SyncModule } from './../../sync.module';

import { crmRoutes } from './crm.routes';
import { EmptyComponent} from './empty/empty.component'
import { Form1Component} from './form1/form1.component'


const dialogMock = {
  close: () => { }
 };

@NgModule({
  declarations: [
    EmptyComponent,
    Form1Component
  ],
  imports: [
    SharedModule,
    NgxPaginationModule,
    NumberPickerModule,
    DirectivesModule,
    TooltipModule,
    CarouselModule,
    BsDropdownModule.forRoot(),
    PipesModule,
    FileUploadModule,
    RouterModule.forChild(crmRoutes),
    MatDialogModule,
    DropzoneModule,
    NgxGalleryModule,
    BsDatepickerModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    SyncModule,
    AgmCoreModule,
  ],
  entryComponents: [
  ],
  exports: [
    BsDatepickerModule,
    SyncModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef,useValue: {dialogMock} }
  ]
})
export class CrmModule { }
