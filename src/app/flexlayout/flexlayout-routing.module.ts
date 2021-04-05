import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexHomeComponent } from './flex-home/flex-home.component';
import { LayoutGapComponent } from './layout-gap/layout-gap.component';

const routes: Routes = [
  { path: 'home', component: FlexHomeComponent},
  { path: 'layoutgap', component: LayoutGapComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FlexlayoutRoutingModule { }
