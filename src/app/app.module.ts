import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDesignModule} from './material-design/material-design.module';
import { FlexlayoutModule } from './flexlayout/flexlayout.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsLearningModule } from './reactive-forms/reactive-forms.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FlexlayoutModule,
    ReactiveFormsLearningModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
