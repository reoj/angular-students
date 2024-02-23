
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntityViewerComponent } from 'src/Components/shared/entity-viewer/entity-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    EntityViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
