import {Pipe , PipeTransform } from '@angular/core';

@Pipe({name : 'userNameCl'})
export class UserNameCaptial implements PipeTransform {
    transform(value: any) {
        if (value != null || 'null' || 'undefined' && typeof value !== undefined ){
     return    value.toUpperCase();
    }
    }
}
