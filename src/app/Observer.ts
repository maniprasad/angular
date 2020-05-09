import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    public myData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor() { }

 output: Observable<any> = this.myData.asObservable();

    outPutsubj(data): void {
        alert('sdf');
        // this.storage.get('myData').then((data) => {
        this.myData.next(data);
      //  });
    }
    // updateData(data): void {
    //     this.myData.next(data);
    // }
}
