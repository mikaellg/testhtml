import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation, ElementRef, Injectable, Injector } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  encapsulation: ViewEncapsulation.None
  //providers: [InfiniteScrollService]
})
export class Form1Component implements OnInit, OnDestroy {

  ngUnsubscribe = new Subject();
  private subscription: Subscription;
  styleInput : object;
  bsSettings              : Partial<BsDatepickerConfig>;
  private theme           = 'theme-red';
  
  constructor( )
  {
    this.styleInput=null;
  }


  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterViewInit() {
  }


}
