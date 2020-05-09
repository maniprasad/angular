import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Router, RouterModule , ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../user-details.service';
import { DataService } from '../Observer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  getList: string;
  list: any;
  formGroup: FormGroup;
  emailregex;
  myGroup: FormGroup;
  submitBtnflag: boolean;
  data: any = {};
  // tslint:disable-next-line:max-line-length
  constructor( private  formBuilder: FormBuilder , private http: HttpClient , private routes: Router , private UserDetaSer: UserDetailsService ,  private ts: DataService ) { }

  ngOnInit(): void {
    this.submitBtnflag = true;
    this.createForm();
  }
  onSubmit(data , formdata){
    console.log(formdata);
    this.routes.navigate(['dashboard']);
    this.ts.outPutsubj([{ name: data.name }]);
    // tslint:disable-next-line:no-shadowed-variable
    this.UserDetaSer.getUserlist().subscribe((data) => {
      this.getList = data;
      console.log(this.getList);
    });
  //  this.ts.myData('sfsdf');
  }
  getemailList(control){
const list = [{name: 'maniprasad@gmail.com'}, {name : 'prakash@jio.com'}];
// this.list.filter((element) => {
// if (element === control.email){
//   return true;
// }
// });

// return new Observable(observer => {
//   setTimeout(() => {
//     // tslint:disable-next-line:max-line-length
// const result = (list.IndexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
//     observer.next(result);
//     observer.complete();
//   }, 4000);
// });
}
  createForm(){
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    // this.formGroup = this.formBuilder.group({
    //   email: [null, [Validators.required, Validators.pattern(emailregex)]],
    //   password: [null, Validators.required],
    //   // 'password': [null, [Validators.required, this.checkPassword]],
    //   // 'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    //   // 'validate': ''
    // });
  //   this.myGroup = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl()
  //  }); this.getemailList
    this.myGroup = new FormGroup({
    email: new FormControl(null , [Validators.required , Validators.pattern(emailPattern)]),
    password: new FormControl(null , [Validators.required , Validators.minLength(6)])
 });
  }

  doSomething(data){
    if (data === 'VALID'){
      this.submitBtnflag = false;
    }
  }
  getErrorEmail() {
    return this.myGroup.get('email').hasError('required') ? 'Field is required' :
      this.myGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.myGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }
  getErrorpassword() {
    return this.myGroup.get('password').hasError('required') ? 'Field is required' :
      this.myGroup.get('password').hasError('minlength') ? 'Password is not Satisfied' :
        this.myGroup.get('password').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

}
