import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { IPerson } from '../models/IPerson';
import * as moment from 'moment';


@Component({
  selector: 'app-sample-reactive-form',
  templateUrl: './sample-reactive-form.component.html',
  styleUrls: ['./sample-reactive-form.component.css']
})
export class SampleReactiveFormComponent implements OnInit {

  personForm = this.fb.group({
    name: this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }),
    address: this.fb.group({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    dob: new FormControl(moment().format('YYYY-MM-DD')),
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.dob.value);
  }

  get firstName(): AbstractControl {
    return this.personForm.get('name').get('firstName');
  }

  get dob(): AbstractControl {
    return this.personForm.get('dob');
  }

  clear(): void {
    const val: IPerson = {
      name: {
        firstName: '',
        lastName: '',
      },
      dob: moment().format('YYYY-MM-DD'),
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    };
    this.personForm.setValue(val);
  }

  autoFillAddress(): void {
    const value: Partial<IPerson> = {
      address: {
        street: this.personForm.get('address').get('street').value,
        city: 'Colombo',
        state: 'Western',
        zip: '123234',
      }
    };
    this.personForm.patchValue(value);
  }
}
