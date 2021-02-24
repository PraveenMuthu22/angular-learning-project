import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignRoutingModule } from './material-design-routing.module';
import { MaterialDesignHomeComponent } from './components/material-design-home/material-design-home.component';
import { DialogHomeComponent } from './components/dialog/dialog-home/dialog-home.component';
import { MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [MaterialDesignHomeComponent, DialogHomeComponent],
  imports: [
    CommonModule,
    MaterialDesignRoutingModule,
    MatDialogModule
  ]
})
export class MaterialDesignModule { }
