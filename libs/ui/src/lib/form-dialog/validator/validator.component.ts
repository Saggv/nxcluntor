import { Component, Input, OnInit } from "@angular/core";
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'invalid-error',
  templateUrl: './validator.component.html',
})
export class InvalidErrorComponent implements OnInit{
  @Input() fieldControl?: AbstractControl;
  @Input() label: string;

  msgError: string;
  errors: any;

  constructor(){

  }

  ngOnInit(): void {
    this.errors = {
      required: `${this.label} is required`
    }
  }

  getFormControlError(formControl: AbstractControl | undefined){
    let key = '';
    let result;
    Object.keys(formControl?.errors || {}).forEach((item) =>{
      key = item
       return item;
    })

    result = this.errors[key];
    return result;
  }

}