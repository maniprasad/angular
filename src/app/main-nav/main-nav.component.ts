import { Component , OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {DataService  } from '../Observer';
import { SubscriptionLike as ISubscription } from 'rxjs';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
userName: any;
sub: ISubscription;
  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver , private userdata: DataService) {
  }
// tslint:disable-next-line:use-lifecycle-interface
ngOnInit(){
  this.sub =  this.userdata.output.subscribe(v => {
    if (v) {
    this.userName = v[0].name;
    }
  });
}
Ondestroy(){
  this.sub.unsubscribe();
}
}
