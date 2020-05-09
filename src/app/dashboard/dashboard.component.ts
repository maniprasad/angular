import { Component, OnInit , HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router , RouterLink , Resolve} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Ovalue: any;
  constructor(private   route: Router ) {

    this.color = 'red';
   }
color: string;

  myControl = new FormControl();
  options: any = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => { console.log(value); return this._filter(value);  } ));
  }

   _filter(value) {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  redirect(data){
    console.log('adas');
    this.route.navigate(['user']);
  }
}
