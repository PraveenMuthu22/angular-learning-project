import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexlayoutRoutingModule } from './flexlayout-routing.module';
import { LayoutGapComponent } from './layout-gap/layout-gap.component';
import { FlexHomeComponent } from './flex-home/flex-home.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LayoutGapComponent, FlexHomeComponent],
  imports: [
    CommonModule,
    FlexlayoutRoutingModule,
    SharedModule
  ],
})
export class FlexlayoutModule { }
