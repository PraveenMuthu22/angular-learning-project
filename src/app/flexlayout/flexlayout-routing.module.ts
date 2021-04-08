import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildPropertiesComponent } from './child-properties/child-properties.component';
import { FlexHomeComponent } from './flex-home/flex-home.component';
import { LayoutAlignComponent } from './layout-align/layout-align.component';
import { LayoutGapComponent } from './layout-gap/layout-gap.component';

const routes: Routes = [
  { path: 'home', component: FlexHomeComponent},
  { path: 'layoutgap', component: LayoutGapComponent},
  { path: 'layoutalign', component: LayoutAlignComponent},
  { path: 'childproperties', component: ChildPropertiesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FlexlayoutRoutingModule { }
