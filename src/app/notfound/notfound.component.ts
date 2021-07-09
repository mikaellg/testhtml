import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { NavigationService } from '../services';
import { Navigation } from '../helpers';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styles: []
})
export class NotfoundComponent implements OnInit, AfterContentInit {

  navigation: Navigation;

  constructor(private _navigationService: NavigationService) { }

  ngOnInit() {
    this.navigation = this._navigationService.getNavigationItem('404');
  }

  ngAfterContentInit() {

  }

}
