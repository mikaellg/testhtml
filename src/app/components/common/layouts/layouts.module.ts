import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BasicLayoutComponent} from './basicLayout.component';
import {TopNavigationLayoutComponent} from './topNavigationLayout.component';
import {NavigationComponent} from './../navigation/navigation.component';
import {FooterComponent} from './../footer/footer.component';
import { TopNavbarComponent } from './../topnavbar/topnavbar.component';
import { TopNavigationNavbarComponent } from './../topnavbar/topnavigationnavbar.component';
import { MatIconModule } from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import { PipesModule } from '../../../pipes/pipes.module';
//import { WidgetsModule } from '../../../modules/widgets/widgets.module';


@NgModule({
  declarations: [
    FooterComponent,
    BasicLayoutComponent,
    NavigationComponent,
    TopNavigationLayoutComponent,
    TopNavbarComponent,
    TopNavigationNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BsDropdownModule,
    MatIconModule,
    TranslateModule,
    PipesModule,
    //WidgetsModule
  ],
  exports: [
    FooterComponent,
    BasicLayoutComponent,
    NavigationComponent,
    TopNavigationLayoutComponent,
    TopNavbarComponent,
    TopNavigationNavbarComponent
  ],
})

export class LayoutsModule {}
