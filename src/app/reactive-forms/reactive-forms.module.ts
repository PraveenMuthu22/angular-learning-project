import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsHomeComponent } from './reactive-forms-home/reactive-forms-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleReactiveFormComponent } from './sample-reactive-form/sample-reactive-form.component';

@NgModule({
  declarations: [ReactiveFormsHomeComponent, SampleReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormsLearningModule { }
