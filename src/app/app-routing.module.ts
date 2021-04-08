import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'material',
    loadChildren: () => import('./material-design/material-design-routing.module').then(module => module.MaterialDesignRoutingModule)
  },
  {
    path: 'flexlayout',
    loadChildren: () => import('./flexlayout/flexlayout-routing.module').then(module => module.FlexlayoutRoutingModule)
  },
  {
    path: 'reactiveforms',
    loadChildren: () => import('./reactive-forms/reactive-forms-routing.module').then(module => module.ReactiveFormsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
