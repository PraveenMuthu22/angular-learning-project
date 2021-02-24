import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesignHomeComponent } from './components/material-design-home/material-design-home.component';

const routes: Routes = [
  { path: 'home', component: MaterialDesignHomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialDesignRoutingModule { }
