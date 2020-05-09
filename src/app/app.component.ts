import { Component , OnInit } from '@angular/core';
import { Router, RouterModule , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netfilx';
  constructor(private route: Router ){
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(){
    this.route.navigate(['mani']);
  }
}
