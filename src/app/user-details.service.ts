import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  detailslist: any;

  constructor(private http: HttpClient) { }
// tslint:disable-next-line:no-trailing-whitespace
getUserlist(){ 
   return this.http.get('http://dummy.restapiexample.com/api/v1/employees', {responseType: 'text'});
}

}

