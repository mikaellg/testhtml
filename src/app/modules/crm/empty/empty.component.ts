import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation, ElementRef, Injectable, Injector } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css'],
  encapsulation: ViewEncapsulation.None
  //providers: [InfiniteScrollService]
})
export class EmptyComponent implements OnInit, OnDestroy {

  ngUnsubscribe = new Subject();
  private subscription: Subscription;
  styleInput : object;

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
