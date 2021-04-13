import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsHomeComponent } from './reactive-forms-home/reactive-forms-home.component';
import { SampleReactiveFormComponent } from './sample-reactive-form/sample-reactive-form.component';


const routes: Routes = [
  { path: 'home', component: ReactiveFormsHomeComponent},
  { path: 'sampleform', component: SampleReactiveFormComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
