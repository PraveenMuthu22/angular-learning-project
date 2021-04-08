import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsHomeComponent } from './reactive-forms-home/reactive-forms-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFormsHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormsLearningModule { }
