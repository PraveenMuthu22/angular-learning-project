import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignRoutingModule } from './material-design-routing.module';
import { MaterialDesignHomeComponent } from './components/material-design-home/material-design-home.component';


@NgModule({
  declarations: [MaterialDesignHomeComponent],
  imports: [
    CommonModule,
    MaterialDesignRoutingModule
  ]
})
export class MaterialDesignModule { }
