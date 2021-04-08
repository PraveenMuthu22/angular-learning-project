import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexlayoutRoutingModule } from './flexlayout-routing.module';
import { LayoutGapComponent } from './layout-gap/layout-gap.component';
import { FlexHomeComponent } from './flex-home/flex-home.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LayoutAlignComponent } from './layout-align/layout-align.component';
import { ChildPropertiesComponent } from './child-properties/child-properties.component';


@NgModule({
  declarations: [LayoutGapComponent, FlexHomeComponent, LayoutAlignComponent, ChildPropertiesComponent],
  imports: [
    CommonModule,
    FlexlayoutRoutingModule,
    SharedModule
  ],
})
export class FlexlayoutModule { }
