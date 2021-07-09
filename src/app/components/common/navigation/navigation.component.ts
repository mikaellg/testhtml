import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import 'jquery-slimscroll';
import { SessionService, LoginService, NavigationService } from '../../../services';
import { smoothlyMenu } from '../../../app.helpers';
import {  MenuItem, SortedMenuItem } from '../../../models';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { APP_SETTINGS } from '../../../appsettings';

declare let jQuery: any;

@Component({
	selector: 'navigation',
	templateUrl: 'navigation.template.html'
})
export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {
	username: string;
	userRole: string;
	ngUnsubscribe = new Subject();

	parentItems: SortedMenuItem[];

	constructor(
		private _navigationService: NavigationService,
		private _sessionService: SessionService,
		private _loginService: LoginService,
	) { }

	ngOnInit() {
		
		this.parentItems=this._navigationService.getMenuSorted();
		console.log(this.parentItems);
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	ngAfterViewInit() {
		jQuery('#side-menu').metisMenu();

		if (jQuery('body').hasClass('fixed-sidebar')) {
			jQuery('.sidebar-collapse').slimscroll({
				height: '100%'
			});
		}
	}

	logout() {
	}

	private returnToLogin() {
    this._sessionService.clearSession();
		this._navigationService.navigateToLanding();
	}

	trackById(index, item) {
		return item.id;
	}

	getItemRoute(menuItem: MenuItem): string {
		return `/app/${menuItem.Area.toLowerCase()}/${menuItem.Controller.toLowerCase()}`;
	}

	clickHome(event, newValue) {
		if (newValue === 'Home') {
      if ( APP_SETTINGS.features.enableLandingPage) {
        this.returnToLogin();
      }
			jQuery('#side-menu > li').nextAll().each(function (i, li) {
        const span = jQuery(li).find('a span.nav-label').text();
				if (span !== 'Home') {
					jQuery(li).removeClass('active');
				}
			});
		}
	}

	clearSelectedClient() {
		//this._dataService.customer = new Contact();
  }

  clearSelectedEmployee() {}
}
