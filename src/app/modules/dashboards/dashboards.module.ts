import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AgmCoreModule } from '@agm/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PipesModule } from '../../pipes/pipes.module';
import { dashboardRoutes } from './dashboards.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    NgxPaginationModule,
    AgmCoreModule,
    BsDatepickerModule,
    TooltipModule,
    CarouselModule,
    ModalModule,
    ButtonsModule,
    PipesModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
  ],
})

export class DashboardsModule { }
