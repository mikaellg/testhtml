import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

// App views
import { DashboardsModule } from './modules/dashboards/dashboards.module';

// App modules/components
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularWebStorageModule } from 'angular-web-storage';
import { NotfoundComponent } from './notfound/notfound.component';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AgmCoreModule } from '@agm/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { SyncModule } from './sync.module';
import { TitleCasePipe } from '@angular/common';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DashboardsModule,
    LayoutsModule,
    NgxPaginationModule,
    AngularWebStorageModule,
    MatDialogModule,
    MatBottomSheetModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(ROUTES, { useHash: true, relativeLinkResolution: 'legacy' }),
    SyncModule
  ],
  providers: [TitleCasePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
