import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexlayoutRoutingModule } from './flexlayout-routing.module';
import { LayoutGapComponent } from './layout-gap/layout-gap.component';
import { FlexHomeComponent } from './flex-home/flex-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [LayoutGapComponent, FlexHomeComponent],
  imports: [
    CommonModule,
    FlexlayoutRoutingModule,
    FlexLayoutModule
  ]
})
export class FlexlayoutModule { }
